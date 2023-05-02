import React from "react";

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer className="flex-shrink-0 justify-center items-center bg-gray-100 p-4 md:p-10">
            <div className="flex flex-col justify-center items-center">
                <span className="text-sm mb-4 md:mb-10">&copy; {currentYear} Michał Kwiatkowski</span>
                <div className="flex flex-wrap justify-center md:justify-start">
                    <a
                        href="mailto:kwiatkowski.michal1@gmail.com"
                        className="text-sm text-gray-500 hover:text-gray-700 mr-2 md:mr-4"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michal---kwiatkowski/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-gray-500 hover:text-gray-700 mr-2 md:mr-4"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
