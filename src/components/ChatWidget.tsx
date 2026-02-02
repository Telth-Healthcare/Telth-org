import { MessageCircle } from 'lucide-react';

export default function ChatWidget() {
  const handleClick = () => {
    const phoneNumber = '919514555210';
    const message = 'Hello! I would like to know more about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#D4A554]/50 transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle
        className="text-white group-hover:scale-110 transition-transform"
        size={28}
      />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
}
