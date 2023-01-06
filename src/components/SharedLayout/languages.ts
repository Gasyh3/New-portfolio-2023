export interface Language {
    label: string;
}

export const allLanguages = [
    { label: 'C++' },
    { label: 'Java' },
    { label: 'Python' }
];

const [Cplus, Java, Python] = allLanguages;
export const initialTabs = [Cplus, Java, Python];

export function getNextLanguage(languages: Language[]): Language | undefined {
    const existing = new Set(languages);
    return allLanguages.find((language) => !existing.has(language));
}