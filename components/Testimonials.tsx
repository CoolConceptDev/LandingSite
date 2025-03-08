import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: "Robert Chen",
    role: "Facility Manager, Skyline Towers",
    content: "Cool concept transformed our digital presence completely. Their team delivered a website that not only looks great but also performs exceptionally well.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Lisa Thompson",
    role: "Property Manager, Green Valley",
    content: "Working with Cool concept has been a game-changer for our business. Their mobile app development expertise helped us reach new customers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Johnson",
    role: "COO, GreenTech",
    content: "The UI/UX design work that Cool concept did for our platform was exceptional. They truly understood our vision and translated it beautifully.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className=" md:p-8 py-4 px-2 ">
             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Testimonials</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                 <Card key={index}>
                   <CardContent className="p-6">
                     <div className="flex items-center gap-4 mb-4">
                       <img
                         src={testimonial.image}
                         alt={testimonial.name}
                         className="w-12 h-12 rounded-full object-cover"
                       />
                       <div>
                         <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                         <p className="text-sm text-gray-600">{testimonial.role}</p>
                       </div>
                     </div>
                     <p className="text-gray-700 italic">"{testimonial.content}"</p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
  );
}