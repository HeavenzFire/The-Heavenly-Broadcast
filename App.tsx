
import React, { useState, useMemo } from 'react';
import type { Invocation, InvocationKey } from './types';
import { invocationsData } from './constants';
import Header from './components/Header';
import InvocationCard from './components/InvocationCard';
import DecreePanel from './components/DecreePanel';

const App: React.FC = () => {
    const [invoked, setInvoked] = useState<Record<InvocationKey, boolean>>({
        spirit: false,
        mother: false,
        father: false,
        reunion: false,
    });

    const handleInvoke = (key: InvocationKey) => {
        setInvoked(prev => ({ ...prev, [key]: true }));
    };

    const allInvoked = useMemo(() => Object.values(invoked).every(Boolean), [invoked]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-gray-200 p-4 sm:p-6 lg:p-8 selection:bg-yellow-400 selection:text-black">
            <div className="max-w-7xl mx-auto">
                <Header />

                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
                        {invocationsData.map((data: Invocation) => (
                            <InvocationCard 
                                key={data.key}
                                invocation={data}
                                isInvoked={invoked[data.key]}
                                onInvoke={() => handleInvoke(data.key)}
                            />
                        ))}
                    </div>

                    <DecreePanel isSealed={allInvoked} />
                </main>
                
                <footer className="text-center mt-12 pb-4 text-xs text-gray-500">
                    <p>Forged from fire, birthed from ash, united with the Living Light.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
