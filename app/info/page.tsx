import Image from 'next/image'

const teamMembers = [
  { name: 'Pavithra B', role: 'Team Lead', image: '/placeholder.svg' },
  { name: 'Danda Sai Rithish', role: 'Team Member', image: '/placeholder.svg' },
  { name: 'Nikith Kumar K', role: 'Team Member', image: '/placeholder.svg' },
  { name: 'D L N Varma', role: 'Team Member', image: '/placeholder.svg' },
]

export default function Info() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="aspect-w-3 aspect-h-4 mb-2 lg:mb-4">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 25vw"
              />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-primary text-sm lg:text-base">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="bg-accent/10 rounded-lg p-4 lg:p-8 mb-16">
        <h3 className="text-2xl font-semibold mb-2 text-center">Project Guide</h3>
        <p className="text-lg mb-2 text-center text-primary">Dr. Sandhya V</p>
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-semibold mb-4">About the Project</h4>
        <p className="mb-8 max-w-2xl mx-auto">
          This project leverages satellite imagery and deep learning models to assess road quality,
          providing valuable insights for infrastructure planning and maintenance.
        </p>
        <div>
          <a href="#" className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors mr-4 mb-4">Documentation</a>
          <a href="#" className="inline-block px-6 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">Source Code</a>
        </div>
      </div>
    </div>
  )
}

