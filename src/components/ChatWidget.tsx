import { MessageCircle } from 'lucide-react';

export default function ChatWidget() {
  const handleClick = () => {
    alert(
      'Chat support coming soon! For immediate assistance, please email: info@telth.org'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#D4A554]/50 transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label="Chat with us"
    >
      <MessageCircle className="text-white group-hover:scale-110 transition-transform" size={28} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
}
