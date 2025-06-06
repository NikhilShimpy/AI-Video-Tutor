import React from 'react';
import { BookOpen, Calculator, FlaskRound as Flask, Dna, Globe, BookText, Code, Atom, Music, Languages } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface SubjectSelectorProps {
  onSelectSubject: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onSelectSubject }) => {
  const subjects: Subject[] = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: <Calculator className="h-8 w-8" />,
      description: 'Algebra, calculus, geometry, and more'
    },
    {
      id: 'physics',
      name: 'Physics',
      icon: <Atom className="h-8 w-8" />,
      description: 'Mechanics, thermodynamics, quantum physics'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      icon: <Flask className="h-8 w-8" />,
      description: 'Organic chemistry, biochemistry, chemical reactions'
    },
    {
      id: 'biology',
      name: 'Biology',
      icon: <Dna className="h-8 w-8" />,
      description: 'Cellular biology, genetics, ecology'
    },
    {
      id: 'history',
      name: 'History',
      icon: <Globe className="h-8 w-8" />,
      description: 'World history, civilizations, important events'
    },
    {
      id: 'literature',
      name: 'Literature',
      icon: <BookText className="h-8 w-8" />,
      description: 'Classic literature, poetry, literary analysis'
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: <Code className="h-8 w-8" />,
      description: 'Programming, algorithms, data structures'
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: <Languages className="h-8 w-8" />,
      description: 'Learn new languages with personalized lessons'
    },
    {
      id: 'music',
      name: 'Music Theory',
      icon: <Music className="h-8 w-8" />,
      description: 'Notes, scales, harmony, and composition'
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Choose a Subject</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => onSelectSubject(subject)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
                  <p className="text-gray-600 mt-1">{subject.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;