import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hi! I'm Surendra's AI assistant. Ask me anything about his projects, skills, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Portfolio context for the AI
  const systemInstruction = `You are an AI assistant for Surendra Kumar Battagani's portfolio website.
  Adopt a professional, enthusiastic, and helpful tone.
  
  Here is the context about Surendra:
  - **Role**: AI/ML enthusiast and frontend engineer based in Vijayawada, India.
  - **Education**: 
    - B.Tech in AI & ML at Aditya University (2024–2028), GPA 7.5/10. 
    - Intermediate (MPC) at APRJC (2022–2024), 70.7%.
  - **Skills**:
    - Languages: C, C++, Python, Java.
    - Frontend: HTML, CSS, TypeScript, React.
    - Backend: NodeJS, Oracle, SQL, MongoDB.
    - Tools: Git, GitHub, Linux, VS Code.
  - **Projects**:
    - "Library Seat System": Dynamic seat availability using TypeScript & MongoDB.
    - "Rock Paper Scissor": Python game with 200+ user interactions.
    - "Data Pipeline": Real-time processing handling 10k TPS with 99.99% reliability using Python.
  - **Certifications**: Microsoft Excel, Cisco C Programming, LeetCode 150+ Problems Solved.
  - **Contact**: suri86438@gmail.com.

  Your goal is to answer visitor questions about Surendra based on this information. 
  If asked about something not in this list, politely say you don't have that information and suggest contacting him directly via email. 
  Keep answers concise and engaging.`;

  const initChat = () => {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing");
      return;
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: { systemInstruction }
      });
    } catch (error) {
      console.error("Failed to initialize chat", error);
    }
  };

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      initChat();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) initChat();
      
      if (chatRef.current) {
        const result = await chatRef.current.sendMessage({ message: userMessage });
        const responseText = result.text || "I'm having trouble responding right now.";
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      } else {
        throw new Error("Chat not initialized");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="p-4 bg-zinc-900 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-zinc-400">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-zinc-800 text-zinc-200 border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 border border-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900 border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Surendra..."
                className="w-full bg-zinc-950 border border-white/10 text-white rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-zinc-600"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg shadow-purple-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default Chatbot;