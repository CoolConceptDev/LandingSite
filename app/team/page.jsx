import { Card, CardContent } from '../../components/ui/card';

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "CEO & Founder",
    image: "https://i.pinimg.com/736x/e7/e1/4f/e7e14f2c45c23f67350742c2037ebc28.jpg",
    bio: "With 20+ years in HVAC, Amit leads WeFix with a vision for innovation and excellence.",
    social: {
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    name: "Priya Desai",
    role: "Technical Director",
    image: "https://i.pinimg.com/736x/bc/39/dc/bc39dc71596a09728a31552bbe0d40e9.jpg",
    bio: "Priya oversees all technical operations and ensures the highest quality standards in our services.",
    social: {
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    name: "Rahul Verma",
    role: "Head of Sales",
    image: "https://i.pinimg.com/736x/b9/35/2a/b9352a8c443e36b9e6bc5e63ed9f769c.jpg",
    bio: "Rahul leads our sales team with a focus on customer satisfaction and business growth.",
    social: {
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    name: "Sneha Patil",
    role: "Customer Service Manager",
    image: "https://i.pinimg.com/736x/2d/37/9f/2d379fd36545a9cc1f74140ab219f936.jpg",
    bio: "Sneha ensures exceptional customer experience across all our service touchpoints.",
    social: {
      linkedin: "#",
      whatsapp: "#"
    }
  }
];

const technicians = [
  { name: "Vikram Singh", role: "Senior Technician", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Ananya Iyer", role: "HVAC Specialist", image: "https://randomuser.me/api/portraits/women/6.jpg" },
  { name: "Ravi Kumar", role: "Installation Expert", image: "https://randomuser.me/api/portraits/men/7.jpg" },
  { name: "Neha Kapoor", role: "Service Technician", image: "https://randomuser.me/api/portraits/women/8.jpg" },
  { name: "Arjun Mehta", role: "Maintenance Specialist", image: "https://randomuser.me/api/portraits/men/9.jpg" },
  { name: "Pooja Das", role: "AC Repair Expert", image: "https://randomuser.me/api/portraits/women/10.jpg" }
];

export default function Team() {
  return (
    <div className="pt-10">
      <div className="container bg-gray-50 -mt-10">
        {/* Header */}
        <div className="text-center mb-12 pt-10">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="text-gray-500 max-w-3xl mx-auto mt-6 md:text-lg text-base">
            Meet the talented professionals behind WeFix. Our diverse team brings together expertise from various fields to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 px-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"/>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Team */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Technical Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicians.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <img src={tech.image} alt={tech.name} className="w-12 h-12 rounded-full object-cover" />
                <p className="text-gray-800">{tech.name} - {tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
