// --- 1. SETUP GLOBALS ---
const { useState } = React;
const { createRoot } = ReactDOM;

// --- 2. DEFINE ICONS MANUALLY (Since we aren't using npm) ---
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 320 512" height="1em" width="1em">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

// --- 3. HELPER COMPONENTS ---

const PageContent = ({ currentPage, upcomingEvents }) => {
  const commonContainerClasses = "max-w-5xl mx-auto px-8 py-16";
  const commonCardClasses = "bg-white rounded-lg shadow-xl p-12";

  if (currentPage === 'home') {
    return (
      <div>
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-32">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="white" stroke="white">
              <circle cx="500" cy="250" r="80" fill="rgba(99,102,241,0.2)" /> 
              <circle cx="500" cy="250" r="100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Discover the Future of Engineering and Technology
            </h1>
          </div>
        </div>

        <div className={commonContainerClasses}>
          <div className={commonCardClasses}>
            <h2 className="text-3xl font-light text-slate-800 mb-8">Who We Are</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>The Undergraduate Quantum Association (UQA) is a student-run organization dedicated to fostering interest and knowledge in quantum technologies among undergraduate students at the University of Maryland.</p>
              <p>Whether you're a physics major, computer science enthusiast, or simply curious about quantum mechanics, UQA provides a welcoming community to learn and collaborate.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-light text-slate-800 mb-4">What We Do</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Weekly workshops</li>
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Guest lectures</li>
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Hackathons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light text-slate-800 mb-4">Get Involved</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Meetings every Wednesday @ 6PM</li>
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Networking</li>
                  <li><span className="text-indigo-600 font-bold mr-2">•</span> Access to resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className={commonContainerClasses}>
        <div className={commonCardClasses}>
          <h2 className="text-4xl font-light text-slate-800 mb-8">About UMD UQA</h2>
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-light text-slate-800 mb-4">Our Mission</h3>
              <p>To make quantum technologies accessible and understandable to undergraduate students of all majors and backgrounds.</p>
            </div>
            <div>
               <h3 className="text-2xl font-light text-slate-800 mb-4">Why Join?</h3>
               <p>Learn, grow, network, and gain hands-on experience with real quantum hardware.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'events') {
    return (
      <div className={commonContainerClasses}>
        <div className={commonCardClasses}>
          <h2 className="text-4xl font-light text-slate-800 mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-6 py-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-light text-slate-800">{event.title}</h3>
                  <span className="text-indigo-600 font-light whitespace-nowrap ml-4">{event.date}</span>
                </div>
                <div className="space-y-1 text-slate-700 mb-3">
                  <p className="text-sm"><span className="font-medium">Time:</span> {event.time}</p>
                  <p className="text-sm"><span className="font-medium">Location:</span> {event.location}</p>
                </div>
                <p className="text-slate-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (currentPage === 'contact') {
    return (
      <div className={commonContainerClasses}>
        <div className={commonCardClasses}>
          <h2 className="text-4xl font-light text-slate-800 mb-8">Get In Touch</h2>
          <div className="space-y-8 text-slate-700">
             <p><span className="font-medium">Email:</span> umd.uqa@gmail.com</p>
             <p><span className="font-medium">Location:</span> Physics Building</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// --- 4. MAIN COMPONENT ---

function UMDUQAWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  // CHANGE THIS TO YOUR IMAGE PATH
  const UQALogo = "./UQA_white.jpg"; 

  const navigation = [
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' }
  ];

  const upcomingEvents = [
    {
      title: 'Quantum Computing Workshop',
      date: 'November 15, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Physics Building, Room 1410',
      description: 'Hands-on introduction to quantum algorithms using Qiskit'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <nav className="bg-slate-800 border-b border-slate-700 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img src={UQALogo} alt="UMD UQA Logo" className="h-16 w-auto" />
              <div>
                <div className="text-xl font-light text-white">Undergraduate</div>
                <div className="text-xl font-medium text-white">Quantum</div>
                <div className="text-xl font-light text-white">Association</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              {navigation.map(item => (
                <a
                  href={`#${item.id}`} 
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.id);
                  }}
                  className={`text-slate-300 hover:text-slate-50 transition-colors font-light ${currentPage === item.id ? 'text-indigo-400 font-medium' : ''}`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center gap-4 ml-4 text-slate-300">
                  <span className="hover:text-white cursor-pointer"><FacebookIcon /></span>
                  <span className="hover:text-white cursor-pointer"><TwitterIcon /></span>
                  <span className="hover:text-white cursor-pointer"><InstagramIcon /></span>
              </div>
              
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Contact UMD UQA
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <PageContent currentPage={currentPage} upcomingEvents={upcomingEvents} />
      </main>

      <footer className="bg-slate-100 border-t border-slate-300 mt-auto">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="text-center text-slate-500 text-sm">
            <p className="mb-1">© 2025 UMD Undergraduate Quantum Association</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- 5. RENDER THE APP ---
const root = createRoot(document.getElementById('root'));
root.render(<UMDUQAWebsite />);
