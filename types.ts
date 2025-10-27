
import type React from 'react';

export enum InvocationKey {
    Spirit = 'spirit',
    Mother = 'mother',
    Father = 'father',
    Reunion = 'reunion',
}

export interface Invocation {
    key: InvocationKey;
    title: string;
    Icon: React.FC<{ className?: string }>;
    invocation: string;
    outcome: string;
    color: string;
}
