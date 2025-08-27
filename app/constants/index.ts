interface MenuItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: {
        label: string;
        href: string;
    }[];
}

interface productItem {
    label: string;
    href: string;
}

interface CompanyItem {
    label: string;
    href: string;
}

interface CtaButton {
    label: string;
    href: string;
    primary: boolean;
}

interface FooterLink {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
}
export const productsItems : productItem[] = [
    { label: "Digital Invoice", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Reimbursements", href: "#" },
    { label: "Virtual Assistant", href: "#" },
    { label: "Artificial Intelligence", href: "#" }
  ];

 export const companyItems : CompanyItem[] = [
    { label: "About Us", href: "#" },
    { label: "Newsletters", href: "#" },
    { label: "Our Partners", href: "#" },
    { label: "Career", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

 export const menuItems : MenuItem[] = [
    {
      label: "Products",
      href: "#features",
      hasDropdown: true,
      dropdownItems: productsItems
    },
    { label: "Benefit", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Pricing", href: "#" },
    {
      label: "Company",
      href: "#",
      hasDropdown: true,
      dropdownItems: companyItems
    },
  ];

 export const ctaButtons : CtaButton[] = [
    {
      label: "Login",
      href: "#",
      primary: true
    },
    {
      label: "Get Demo",
      href: "#",
      primary: false
    }
  ];


export const footerLinks : FooterLink[] = [
    {
      title: "Product",
      links: [
        { label: "Digital Invoice", href: "#" },
        { label: "Insights", href: "#" },
        { label: "Reimbursements", href: "#" },
        { label: "Virtual Assistant", href: "#" },
        { label: "Artificial Intelligence", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Newsletters", href: "#" },
        { label: "Our Partners", href: "#" },
        { label: "Career", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Events", href: "#" },
        { label: "Ebook & Guide", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ];
  