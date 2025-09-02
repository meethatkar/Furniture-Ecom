import { Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact_dets = () => {

    const data = [
        {
            icon: <MapPin size={40} />,
            heading: "Address",
            dets1: "236 5th SE Avenue, New York ",
            dets2: "NY10000, United States"
        },
        {
            icon: <Phone size={40} />,
            heading: "Phone",
            dets1: "Mobile: +(00) 000-0000",
            dets2 : "Hotline: +(00) 000-0000"
        },
        {
            icon: <Clock size={40} />,
            heading: "Working Time",
            dets1: "Monday-Friday: 9:00 - 22:00",
            dets2 : "Saturday-Sunday: 9:00 - 21:00"
        },
    ]

  return (
    <div className="flex flex-col gap-10">
        {
            data.map((item, index) => (
                <div key={index} className="flex gap-[1.5vw]">
                    <div className="text-gray-700">
                        {item.icon}
                    </div>
                    <div className='text-start'>
                        <h3 className="text-[1.7vw] font-medium mb-[0.5vw]">{item.heading}</h3>
                        <p className="text-gray-600 text-[1vw]">{item.dets1}</p>
                        <p className="text-gray-600 text-[1vw]">{item.dets2}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Contact_dets