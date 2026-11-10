import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { companyInfo } from '../data/company';
import { useDocumentSEO } from '../hooks/useDocumentSEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  ClipboardList,
  Sparkles,
  Globe
} from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  productCategory: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message details must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject') || '';
  const isProductInquiry = searchParams.get('type') === 'product_inquiry' || subjectParam.length > 0;

  useDocumentSEO({
    title: isProductInquiry 
      ? 'Product Related Inquiry Form | AFANDI INTERNATIONAL' 
      : 'Contact Us | AFANDI INTERNATIONAL Official Desk',
    description: 'Get in touch with AFANDI INTERNATIONAL headquarters. Submit formal product inquiries, material specification questions, and custom corporate requests.',
    canonicalPath: '/contact',
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "AFANDI INTERNATIONAL Contact & Product Inquiry Desk",
        "url": "https://afandi-int.com/contact",
        "email": "info@afandi-int.com",
        "telephone": "+18005552326"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Portal",
            "item": "https://afandi-int.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact & Inquiry",
            "item": "https://afandi-int.com/contact"
          }
        ]
      }
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isProductInquiry]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: subjectParam || (isProductInquiry ? 'Product Related Specification Inquiry' : ''),
      productCategory: 'Gearwear - Gloves & Handwear',
    }
  });

  useEffect(() => {
    if (subjectParam) {
      setValue('subject', subjectParam);
    }
  }, [subjectParam, setValue]);

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`[AFANDI INTERNATIONAL Product Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
      `Full Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nProduct Category: ${data.productCategory || 'N/A'}\n\nInquiry Details / Requirements:\n${data.message}`
    );
    const generatedMailto = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    
    setMailtoUrl(generatedMailto);
    setFormSubmitted(true);
    
    window.location.href = generatedMailto;
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello AFANDI INTERNATIONAL, I would like to inquire about your product collections and specifications."
  )}`;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#12100E] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDAA27]/15 border border-[#FDAA27]/30 text-[#FDAA27] text-xs font-mono font-bold tracking-widest uppercase rounded-xs">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>OFFICIAL PRODUCT INQUIRY & CONTACT DESK</span>
          </div>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#FAF6F0]">
            Product Related Inquiry Form
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#D8CFBF] font-normal max-w-xl mx-auto">
            Submit formal inquiries regarding gearwear handwear, tactical gloves, apparel shells, leather wallets, or bespoke corporate manufacturing specifications.
          </p>
        </div>

        {/* 2 Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#1A1612] p-8 sm:p-10 rounded-xs border border-[#2D2720] space-y-6 shadow-2xl">
            <div className="border-b border-[#2D2720] pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#FAF6F0]">Product Inquiry Details</h2>
                <p className="font-sans text-xs text-[#A89E90] mt-1 font-normal">
                  All requests are processed directly by our international product development division.
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-[#FDAA27]" />
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#221D18] border border-[#FDAA27] rounded-xs space-y-4 text-center font-sans">
                <CheckCircle2 className="w-12 h-12 text-[#FDAA27] mx-auto" />
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF6F0]">Inquiry Dispatched</h3>
                <p className="text-sm sm:text-base text-[#D8CFBF] font-normal">
                  Your default email application has opened with your pre-filled inquiry. If it did not launch automatically, click the button below.
                </p>
                <div className="pt-2">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDAA27] text-[#12100E] text-sm font-bold uppercase tracking-wider rounded-xs shadow-md hover:bg-[#D98A10] transition-colors"
                  >
                    <span>Launch Email Application</span>
                    <ExternalLink className="w-4 h-4 text-[#12100E]" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans text-sm">
                
                {/* Product Category Target */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27]">
                    PRODUCT DIVISION / TARGET CATEGORY
                  </label>
                  <select
                    {...register('productCategory')}
                    className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] focus:outline-none focus:border-[#FDAA27] font-medium"
                  >
                    <option value="Gearwear - Gloves & Handwear" className="bg-[#1A1612]">Gearwear: Gloves & Handwear (Tactical / Workwear / Thermal)</option>
                    <option value="Gearwear - Jackets & Outerwear" className="bg-[#1A1612]">Gearwear: Jackets & Weatherproof Outerwear</option>
                    <option value="Gearwear - Trousers & Workwear" className="bg-[#1A1612]">Gearwear: Trousers & Minimalist Cargo Pants</option>
                    <option value="Gearwear - Vests & Layers" className="bg-[#1A1612]">Gearwear: Thermal Gilets & Mid-Layers</option>
                    <option value="Accessories - Wallets & Leather Pouches" className="bg-[#1A1612]">Accessories: Full-Grain Leather Wallets & Folios</option>
                    <option value="Accessories - Bags & Backpacks" className="bg-[#1A1612]">Accessories: Waxed Canvas & Cordura® Backpacks</option>
                    <option value="Accessories - Belts & Webbing" className="bg-[#1A1612]">Accessories: Woven Webbing & Tactical Belts</option>
                    <option value="Accessories - Hardware & Clips" className="bg-[#1A1612]">Accessories: Solid Marine Bronze Hardware & Clips</option>
                    <option value="General Corporate Partnership" className="bg-[#1A1612]">General Corporate / Manufacturing Partnership</option>
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27]">
                      YOUR FULL NAME <span className="text-[#FDAA27]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="e.g. Julian Vance"
                      className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] font-medium"
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27]">
                      WORK / BUSINESS EMAIL <span className="text-[#FDAA27]">*</span>
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="e.g. julian@organization.com"
                      className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] font-medium"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A89E90]">
                      DIRECT PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27]">
                      INQUIRY SUBJECT <span className="text-[#FDAA27]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      placeholder="e.g. Tactical Operator Gloves Spec-Sheet Request"
                      className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] font-medium"
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDAA27]">
                    SPECIFICATION REQUIREMENTS & DETAILS <span className="text-[#FDAA27]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    {...register('message')}
                    placeholder="Provide details regarding material requirements, sizing needs, testing standards, or technical questions..."
                    className="w-full px-4 py-3.5 text-sm sm:text-base bg-[#221D18] border border-[#2D2720] rounded-xs text-[#FAF6F0] placeholder:text-[#786E61] focus:outline-none focus:border-[#FDAA27] font-medium"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FDAA27] hover:bg-[#D98A10] text-[#12100E] text-sm font-bold uppercase tracking-wider rounded-xs transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#12100E]" />
                    <span>TRANSMIT PRODUCT INQUIRY</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            
            {/* Info Box */}
            <div className="bg-[#1A1612] p-8 rounded-xs border border-[#2D2720] space-y-6 shadow-2xl">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF6F0]">Headquarters Contact</h3>

              <div className="space-y-5 text-sm sm:text-base text-[#D8CFBF]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF6F0] block text-xs font-bold uppercase tracking-wider">Atelier Complex</strong>
                    <span className="font-normal text-[#A89E90]">{companyInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF6F0] block text-xs font-bold uppercase tracking-wider">Direct Telephone</strong>
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-[#FDAA27] font-semibold text-[#FAF6F0] transition-colors">{companyInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF6F0] block text-xs font-bold uppercase tracking-wider">Official Email</strong>
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-[#FDAA27] font-semibold text-[#FDAA27] transition-colors">{companyInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#FDAA27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF6F0] block text-xs font-bold uppercase tracking-wider">Official Domain</strong>
                    <a href={companyInfo.website} className="hover:text-[#FDAA27] font-semibold text-[#FAF6F0] transition-colors tracking-wider uppercase font-mono text-xs">{companyInfo.domain}</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Configurable Link */}
              <div className="pt-4 border-t border-[#2D2720]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#221D18] hover:bg-[#2D2720] text-[#FAF6F0] hover:text-[#FDAA27] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs border border-[#2D2720] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#FDAA27]" />
                  <span>Connect via WhatsApp</span>
                  <ExternalLink className="w-4 h-4 text-[#FDAA27]" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="bg-[#1A1612] p-4 rounded-xs border border-[#2D2720] space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#A89E90]">
                STUDIO LOCATION MAP
              </h4>
              <div className="rounded-xs overflow-hidden border border-[#2D2720] aspect-16/9 bg-[#0E0C0A]">
                <iframe
                  title="AFANDI INTERNATIONAL Headquarters Location"
                  src={companyInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
