import { useState } from 'react';
import { User, Code, Briefcase, GraduationCap, Music } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const tabs = [
    { id: 'personal', label: 'Bio', icon: <User className="w-5 h-5" /> },
    { id: 'experience', label: 'Enfoque', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'education', label: 'Educación', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'music', label: 'Música', icon: <Music className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mi</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Conozca más sobre mí, mi trayectoria y lo que me motiva como desarrollador.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jony Reyes" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500/10 rounded-full filter blur-2xl"></div>
          </div>
          
          <div>
            <div className="flex border-b border-gray-300 dark:border-gray-700 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'text-indigo-500 border-b-2 border-indigo-500' 
                      : 'text-gray-500 hover:text-indigo-400'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className={`${activeTab === 'personal' ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-semibold mb-4">¿Quíen Soy?</h3>
              <p className="mb-4 leading-relaxed">
                Soy Jony Reyes, pasé de la contabilidad y lo administrativo, a dar el giro a mi carrera por el desarrollo web.
              </p>
              <p className="mb-6 leading-relaxed">
                El tener bases administrativas me ayuda a entender más las necesidades del cliente. Logrando así una mejor inspiracion para los proyectos. 
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Creative Thinker</div>
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Problem Solver</div>
                <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">Design Enthusiast</div>
              </div>
            </div>
            
            <div className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Mi Enfoque</h3>
                  <p className="text-indigo-500 mb-2">Tech Innovations Inc. • 2021 - Present</p>
                  <p className="text-sm leading-relaxed">
                   Creo en el diseño centrado en el usuario y en escribir código limpio que brinde experiencias excepcionales.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Mi Trayectoria</h3>
                  <p className="text-indigo-500 mb-2"> Con más de 2 años en frontend, he creado desde tiendas en línea hasta apps complejas. Siempre estoy al día con las nuevas tecnologías y tendencias.</p>
                  <p className="text-sm leading-relaxed">
            
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Junior Web Developer</h3>
                  <p className="text-indigo-500 mb-2">CreativeWeb Agency • 2016 - 2018</p>
                  <p className="text-sm leading-relaxed">
                    Created and maintained websites for clients, implemented responsive designs,
                    and collaborated with the design team.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Desarrollo multimedia,
contenido digital 
y recursos informaticos.</h3>
                  <p className="text-indigo-500 mb-2"> Oracle One G7- Alura Latam</p>
                          <p className="text-indigo-500 mb-2"> Jun-2024 Enero-2025</p>
                  <p className="text-sm leading-relaxed">
                  Curso impartido por AluraLatam que forma parte del programa Oracle One Next Education 
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Diseño Web Responsivo</h3>
                  <p className="text-indigo-500 mb-2">FreeCodeCamp - 2024</p>
                  <p className="text-sm leading-relaxed">
              Diseño de páginas web responsivo 
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl font-semibold mb-1">Lic. Turismo</h3>
                  <p className="text-indigo-500 mb-2">2006 - 2010</p>
                  <p className="text-sm leading-relaxed">Instituo Politécnico Nacional 
                  </p>
                </div>
              </div>
            </div>

            <div className={`${activeTab === 'music' ? 'block' : 'hidden'}`}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Mi Música</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Además del desarrollo web, también me apasiona la música. Aquí puedes escuchar una de mis creaciones musicales.
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 shadow-inner">
                  <div className="flex items-center mb-3">
                    <Music className="w-5 h-5 text-indigo-500 mr-2" />
                    <h4 className="font-medium text-gray-900 dark:text-white">IF U WANNA</h4>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
               
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Una expresión artística que refleja mi creatividad más allá del código.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
