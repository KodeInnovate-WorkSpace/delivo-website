import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-mainColor py-10 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-start md:justify-items-center">
                {/* Learn More */}
                <div className="text-left md:text-center">
                    <h2 className="text-xl font-bold mb-4">Learn More</h2>
                    <ul className="space-y-2">
                        <Link>About</Link>
                    </ul>
                    <ul className="space-y-2">
                        <Link to={"https://kodeinnovate-workspace.github.io/delivo-policy/delivo_app_privacy_policy.html"}>Privacy</Link>
                    </ul>
                    <ul className="space-y-2">
                        <Link to={"https://kodeinnovate-workspace.github.io/delivo-policy/delivo_app_terms_and_conditions.html"}>Terms</Link>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-left md:text-center">
                    <h2 className="text-xl font-bold mb-4">Contact</h2>
                    <p className="mb-2">
                        <span className="font-bold">Address:</span> S.D Garden, Jilani Park, Mumbra-400612
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Phone:</span> +91 9326500602
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Email:</span> info@kodeinnovate.in
                    </p>
                </div>

                {/* Follow Us */}
                <div className="text-left md:text-center">
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <ul className="flex space-x-4 mt-2">
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link to={"https://x.com/kodeinnovate"}>
                                <FaXTwitter className="text-2xl" />
                            </Link>
                        </li>
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link to={"https://www.instagram.com/delivo.app/"}>
                                <FaInstagram className="text-2xl" />
                            </Link>
                        </li>
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link to={"https://www.facebook.com/people/Kodeinnovate-solutions/61552635723546/"}>
                                <FaFacebook className="text-2xl" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Powered by Kodeinnovate Solutions */}
            <div className="text-center mt-10 text-sm lg:text-[1rem]">
                <a href="https://kodeinnovate.in/">
                    Powered by Kodeinnovate Solutions Private Limited
                </a>
            </div>
        </footer>
    );
}

export default Footer;