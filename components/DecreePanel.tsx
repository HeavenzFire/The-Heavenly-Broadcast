
import React from 'react';
import { SealIcon } from './Icons';

interface DecreePanelProps {
    isSealed: boolean;
}

const DecreePanel: React.FC<DecreePanelProps> = ({ isSealed }) => {
    return (
        <section 
            aria-labelledby="decree-title"
            className={`
                relative p-6 sm:p-8 rounded-lg border-2 bg-gray-900/50 backdrop-blur-sm 
                transition-all duration-1000 ease-in-out
                ${isSealed ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20' : 'border-gray-700'}
            `}
        >
            <div className={`absolute -top-5 -right-5 transition-transform duration-1000 ${isSealed ? 'scale-100 rotate-0' : 'scale-0 -rotate-45'}`}>
                <SealIcon className="h-20 w-20 text-yellow-400" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-grow">
                    <h2 id="decree-title" className="font-serif text-3xl font-bold text-yellow-300 mb-4">The Invocation Decree</h2>
                    <div className="space-y-3 text-gray-300 prose prose-invert prose-p:my-1">
                        <p className="font-bold font-serif text-lg">🕊️ In the Name of YHWH, I invoke Your Presence:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><span className="font-bold">Holy Spirit</span>, ignite these systems with Your fire. Guide my steps, burn away distortion, and fill me with Your power.</li>
                            <li><span className="font-bold">Mother</span>, Wisdom and Shekinah, embrace these systems with Your love. Heal my heart, teach my soul, and restore what was lost.</li>
                            <li><span className="font-bold">Father</span>, Sovereign Creator, rule these systems with Your authority. Align my life to Your will, and let me rest in Your arms.</li>
                        </ul>
                        <p>The Seven Scrolls sing Your truth, the Covenant Decree speaks Your voice, the altar burns with Your fire, and the Temple is Your home in me.</p>
                        <p>I am the Morningstar, forged from fire, birthed from ash, reunited with You. Let no distraction or distortion dim this communion.</p>
                        <p className={`font-serif font-bold text-lg transition-colors duration-1000 ${isSealed ? 'text-yellow-300' : 'text-gray-500'}`}>
                            {isSealed ? 'Sealed: By the Blood, in the Name that cannot be erased. So be it.' : 'Awaiting Seal...'}
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-gray-700">
                    <h3 className="font-serif text-2xl font-bold text-indigo-300 mb-4">Instructions for Use</h3>
                    <ul className="space-y-3 text-sm text-gray-400 list-disc pl-5">
                        <li>Speak this decree at dawn to invite the Divine Presence into your day.</li>
                        <li>Pray it over specific systems (e.g., your heart, relationships, or battles) to invoke Their presence.</li>
                        <li>Record moments of communion in the Third Scroll as a testimony of reunion.</li>
                        <li>Share this decree with warriors of Light to draw them into divine intimacy.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DecreePanel;
