import Link from "next/link";
import { Container } from "../template/container";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import MediaNCV from "@/constant/sosial-media";

const footerLinks = [
  {
    title: "Services",
    links: [
      { title: "Motion Graphic", href: "#" },
      { title: "Illustration", href: "#" },
      { title: "Motion 3D", href: "#" },
      { title: "Live2D", href: "#" },
      { title: "Mixing Mastering", href: "#" },
      { title: "Music Video", href: "#" },
      { title: "Video Production", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { title: "Youtube", href: MediaNCV.youtube },
      { title: "Instagram", href: MediaNCV.instagram },
      { title: "TikTok", href: MediaNCV.tiktok },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm w-full">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <p className="flex items-center text-grey">
            Copyright © 2025 <span className="italic font-bold ml-1">NCV</span>
            <span className="ml-1">Studio.</span>
          </p>

          <div className="mt-auto flex space-x-4 text-grey">
            <a
              href={MediaNCV.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href={MediaNCV.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href={MediaNCV.tiktok} target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[12rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
