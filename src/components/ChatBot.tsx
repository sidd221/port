import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send } from 'lucide-react';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: React.ReactNode;
};

type ChatStep = 'initial' | 'website_type' | 'ai_type' | 'ask_name' | 'ask_phone' | 'ask_email' | 'done';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hi, what do you need?' }
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [currentStep, setCurrentStep] = useState<ChatStep>('initial');
  const [userDetails, setUserDetails] = useState({ name: '', phone: '', email: '', service: '' });
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialOptions = ['Website', 'Ai automation', 'GMB', 'Want to hire me!'];
  const websiteOptions = ['Multipage', 'Landing Page'];
  const aiOptions = ['GMB automation', 'Ai chat bot', 'Customer support automation'];
  
  const options = 
    currentStep === 'initial' ? initialOptions : 
    currentStep === 'website_type' ? websiteOptions : 
    aiOptions;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleCloseChat = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMessages([{ id: '1', type: 'bot', text: 'Hi, what do you need?' }]);
      setShowOptions(true);
      setCurrentStep('initial');
      setUserDetails({ name: '', phone: '', email: '', service: '' });
      setInputValue('');
    }, 200);
  };

  // Inactivity Timer
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen && currentStep !== 'done') {
      // Close chat after 1 minute of inactivity
      timeoutId = setTimeout(() => {
        handleCloseChat();
      }, 60000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [messages, isOpen, inputValue, currentStep]);

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: option }]);
    
    if (currentStep === 'initial' && option === 'Website') {
      setCurrentStep('website_type');
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            type: 'bot', 
            text: `What kind of website are you looking for?` 
          }
        ]);
      }, 500);
      return;
    }

    if (currentStep === 'initial' && option === 'Ai automation') {
      setCurrentStep('ai_type');
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            type: 'bot', 
            text: `What kind of AI automation are you interested in?` 
          }
        ]);
      }, 500);
      return;
    }

    if (currentStep === 'initial' && option === 'Want to hire me!') {
      setShowOptions(false);
      setCurrentStep('done');

      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            type: 'bot', 
            text: (
              <span>
                You can reach out to me directly at +91 7979098902 or email me at{' '}
                <a href="mailto:siddhatsinha999@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  siddhatsinha999@gmail.com
                </a>
              </span>
            )
          }
        ]);
      }, 500);
      return;
    }

    setShowOptions(false);
    const finalService = currentStep === 'website_type' ? `${option} Website` : option;
    setUserDetails(prev => ({ ...prev, service: finalService }));
    setCurrentStep('ask_name');

    // Simulate bot thinking and replying
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now().toString(), 
          type: 'bot', 
          text: `Great! To proceed, may I have your Name?` 
        }
      ]);
    }, 500);
  };

  const handleInputSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const val = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'user', text: val }]);
    setInputValue('');

    if (currentStep === 'ask_name') {
      setUserDetails(prev => ({ ...prev, name: val }));
      setCurrentStep('ask_phone');
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: `Thanks! Could you share your Phone number?` }]);
      }, 500);
    } else if (currentStep === 'ask_phone') {
      const cleanedPhone = val.replace(/[-\s]/g, '');
      if (!/^\d{10}$/.test(cleanedPhone)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: `Please enter a valid 10-digit phone number.` }]);
        }, 500);
        return;
      }
      setUserDetails(prev => ({ ...prev, phone: val }));
      setCurrentStep('ask_email');
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: `Got it. Lastly, what is your Email?` }]);
      }, 500);
    } else if (currentStep === 'ask_email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
      if (!emailRegex.test(val)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: `Please enter a valid @gmail.com address.` }]);
        }, 500);
        return;
      }
      const finalDetails = { ...userDetails, email: val };
      setUserDetails(finalDetails);
      setCurrentStep('done');
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: `Thank you! I'm redirecting you to WhatsApp to send these details.` }]);
        
        const message = encodeURIComponent(`Hi Siddhant,\n\nI am interested in your ${finalDetails.service} services.\n\nMy Details:\nName: ${finalDetails.name}\nPhone: ${finalDetails.phone}\nEmail: ${finalDetails.email}\n\nPlease let me know how we can proceed.\n\nThanks!`);
        window.open(`https://wa.me/917979098902?text=${message}`, '_blank');
        
        setTimeout(() => {
          handleCloseChat();
        }, 3000);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 z-50 flex items-center justify-center hover:bg-blue-700 transition-colors ${isOpen ? 'hidden' : 'flex'}`}
      >
        <BotMessageSquare size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <BotMessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">Vexa</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-xs text-green-300 font-medium">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleCloseChat}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Options */}
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-2 mt-4"
                >
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="text-sm p-3 border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors rounded-xl text-left flex items-center justify-between group"
                    >
                      <span>{index + 1} - {option}</span>
                      <Send size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
              <form 
                onSubmit={handleInputSubmit}
                className="relative flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={showOptions || currentStep === 'done'}
                  placeholder={showOptions ? "Select an option above..." : "Type your answer..."}
                  className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-full py-3 px-4 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                />
                {!showOptions && currentStep !== 'done' && (
                  <button 
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex shrink-0 items-center justify-center"
                  >
                    <Send size={18} />
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
