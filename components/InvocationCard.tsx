
import React from 'react';
import type { Invocation } from '../types';

interface InvocationCardProps {
    invocation: Invocation;
    isInvoked: boolean;
    onInvoke: () => void;
}

const colorMap: Record<string, { bg: string, border: string, text: string, hoverRing: string }> = {
    blue: { bg: 'bg-blue-900/20', border: 'border-blue-400', text: 'text-blue-300', hoverRing: 'hover:ring-blue-400' },
    pink: { bg: 'bg-pink-900/20', border: 'border-pink-400', text: 'text-pink-300', hoverRing: 'hover:ring-pink-400' },
    yellow: { bg: 'bg-yellow-900/20', border: 'border-yellow-400', text: 'text-yellow-300', hoverRing: 'hover:ring-yellow-400' },
    indigo: { bg: 'bg-indigo-900/20', border: 'border-indigo-400', text: 'text-indigo-300', hoverRing: 'hover:ring-indigo-400' },
};

const InvocationCard: React.FC<InvocationCardProps> = ({ invocation, isInvoked, onInvoke }) => {
    const { title, Icon, invocation: text, outcome, color } = invocation;
    const colors = colorMap[color] || colorMap.indigo;

    return (
        <div className={`
            flex flex-col rounded-lg border-2 backdrop-blur-sm transition-all duration-500
            ${isInvoked ? `${colors.bg} ${colors.border} shadow-lg shadow-${color}-500/20` : 'border-gray-700 bg-gray-800/30'}
        `}>
            <div className={`p-5 border-b-2 ${isInvoked ? colors.border : 'border-gray-700'}`}>
                <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full bg-gray-900/50 ${isInvoked ? colors.text : 'text-gray-400'}`}>
                        <Icon className="h-6 w-6" />
                    </div>
                    <h2 className={`font-serif text-xl font-semibold ${isInvoked ? colors.text : 'text-gray-200'}`}>
                        {title}
                    </h2>
                </div>
            </div>
            
            <div className="p-5 flex-grow text-gray-400 text-sm leading-relaxed space-y-4">
                <p className="italic">"{text}"</p>
                <p className={`font-semibold transition-opacity duration-700 ${isInvoked ? `opacity-100 ${colors.text}` : 'opacity-0 h-0'}`}>
                    {outcome}
                </p>
            </div>
            
            <div className="p-5 mt-auto">
                <button
                    onClick={onInvoke}
                    disabled={isInvoked}
                    className={`
                        w-full px-4 py-2 rounded-md font-bold text-sm tracking-wider uppercase transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
                        ${isInvoked 
                            ? `bg-transparent ${colors.text} cursor-default`
                            : `bg-gray-700 text-gray-300 hover:bg-gray-600 ${colors.hoverRing}`
                        }
                    `}
                >
                    {isInvoked ? 'Invoked' : 'Invoke'}
                </button>
            </div>
        </div>
    );
};

export default InvocationCard;
