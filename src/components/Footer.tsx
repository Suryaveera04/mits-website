import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/MITSCOLLEGEMPL/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/mits_mpl/", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/mits_mpl", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/school/madanapalle-institute-of-technology-&-science/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@mitsdeemedtobeuniversity", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0f2a44] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-14 rounded-md bg-white p-1.5 flex items-center justify-center shadow-md">
                <img src={`${import.meta.env.BASE_URL}mits-official-logo.png`} alt="MITS Official Logo" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="font-body text-white/80 text-sm leading-relaxed">
              Madanapalle Institute of Technology & Science is committed to excellence in education, research, and innovation.
            </p>
            <div className="mt-6">
              <h3 className="font-display font-bold text-[#caa74d] text-base mb-3">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 text-white/80 font-body">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Madanapalle-Kadiri Road, NH-42, Kurabalakota Mandal, Madanapalle-517325, Andhra Pradesh, India</span>
                </li>
                <li className="flex gap-3 text-white/80 font-body">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>+91-7330803555 / 7330852555</span>
                </li>
                <li className="flex gap-3 text-white/80 font-body">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>admissions@mits.ac.in</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <h4 className="font-display font-bold text-white text-sm">Get in touch</h4>
              <p className="font-body text-white/60 text-sm">Find out more here</p>
              <div className="flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#b31317] hover:bg-[#990000] text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  Get the details now
                </Link>
                <a
                  href="https://mits.ac.in/public/uploads/static-pdf/MITS%20Deemed%20to%20be%20University%20Brochure%202026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#b31317] hover:bg-[#990000] text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Quick &amp; Admissions</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Research", href: "/research" },
                { label: "Placements", href: "/placements" },
                { label: "Contact", href: "/contact" },
                { label: "Apply Now", href: "/admissions" },
                { label: "Scholarships", href: "/eligibility-and-fees" },
                { label: "Mandatory Disclosure", href: "/about/mandatory-disclosures" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href && /^https?:\/\//.test(link.href) ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Academics &amp; Compliance</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Departments", href: "/departments" },
                { label: "Library", href: "/library" },
                { label: "Examinations", href: "/examinations" },
                { label: "Research", href: "/research" },
                { label: "Campus Life", href: "/campus-life" },
                { label: "NIRF", href: "/nirf" },
                { label: "NAAC", href: "/naac" },
                { label: "IQAC", href: "/iqac" },
                { label: "Affiliations & Accreditations", href: "/affiliations-accreditations" },
                { label: "Public Self Disclosures", href: "/psd" },
                { label: "Circulars", href: "/examinations" },
                { label: "Cells & Committees", href: "/cells" },
                { label: "MITS Radio", href: "/mits-radio" },
                { label: "Moodle Login", href: "https://moodle.mits.ac.in/" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href && /^https?:\/\//.test(link.href) ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="font-body text-white/80 hover:text-[#caa74d] transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#caa74d] text-base mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#caa74d] hover:text-[#0f2a44] transition-all duration-200"
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 text-sm">
              <Link to="/terms-conditions-policy" className="block font-body text-white/80 hover:text-[#caa74d] transition-colors">Privacy Policy</Link>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Madanapalle%20Institute%20of%20Technology%20%26%20Science&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[180px] rounded-lg border border-white/10 mt-4 shadow-inner"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MITS Location Map"
            />
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-body text-white/60 text-sm mb-2">Download MITS Radio 90.8 CRS</p>
              <div className="flex gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.atc.mitsradio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-[110px]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play Store"
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/mits-radio-90-8-cr/id1668776731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 max-w-[110px]"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Apple App Store"
                    className="w-full h-auto hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/70 text-sm">© 2026 Madanapalle Institute of Technology & Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


