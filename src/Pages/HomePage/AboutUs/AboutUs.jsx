
const AboutUs = () => {
    return (
      <div>
        <section
          className="bg-cover bg-center h-[572px] md:h-[400px] lg:h-[572px] items-center flex my-12"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/0VsY0Cv/damian-zaleski-RYyr-k3-Ysqg-unsplash-1.jpg")',
          }}
        >
          <div className="text-center flex justify-center items-center mx-auto bg-white p-4 md:p-8 lg:p-12">
            <h3 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 w-full md:w-[762px] font-serif">
              Ficro<span className="text-cyan-500">Soft</span> <br />
              <span className="text-base md:text-lg lg:text-xl font-medium">
                Streamline your workforce with our employee management platform.
                From seamless onboarding to performance tracking, payroll
                management, and employee engagement, we offer a comprehensive
                suite of HR solutions. Elevate your company's efficiency and
                employee satisfaction with our tailored services.
              </span>
            </h3>
          </div>
        </section>
      </div>
    );
};

export default AboutUs;