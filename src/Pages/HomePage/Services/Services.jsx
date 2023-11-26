import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbFocus2 } from "react-icons/tb";
import servicesData from "../../../../public/services.json"; 

const Services = () => {
    return (
      <div>
        <h1 className="text-5xl font-serif font-medium text-center text-cyan-500 py-12">
          Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center p-12 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg m-4"
            >
              <img
                className="object-cover object-center w-full h-56"
                src={service.image}
                alt="service"
              />

              <div className="flex items-center px-6 py-3 ">
                <TbFocus2 />
                <h1 className="mx-3 text-lg font-semibold text-white">
                  {service.cta}
                </h1>
              </div>

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">{service.title}</h1>

                <p className="py-2 ">{service.successMetric}</p>

                <div className="flex items-center mt-4">
                  <MdOutlineDriveFileRenameOutline />
                  <h1 className="px-2 text-sm">
                    Ficro<span className="text-cyan-500">Soft</span>
                  </h1>
                </div>

                <div className="flex items-center mt-4">
                  <FaLocationDot />
                  <h1 className="px-2 text-sm">{service.location}</h1>
                </div>

                <div className="flex items-center mt-4">
                  <MdEmail />
                  <h1 className="px-2 text-sm">{service.email}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;
