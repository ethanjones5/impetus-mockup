"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

interface SiteConfig {
  name: string;
  description?: string;
  mainNav?: NavItem[];
}

interface SiteHeaderProps {
  siteConfig?: SiteConfig;
  showThemeToggle?: boolean;
  showGetStarted?: boolean;
  className?: string;
}

const defaultSiteConfig: SiteConfig = {
  name: "Impetus Home Services",
  description: "Professional Home Care & Renovation Services in Toronto/GTA",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Home Care Services",
      href: "/handyman",
    },
    {
      title: "Renovations",
      href: "/reno",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export function SiteHeader({ 
  siteConfig = defaultSiteConfig,
  showThemeToggle = true,
  showGetStarted = true,
  className
}: SiteHeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Logo />
          
          {siteConfig.mainNav && siteConfig.mainNav.length > 0 && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {siteConfig.mainNav.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {showGetStarted && (
            <Button variant="outline" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          )}
          {showThemeToggle && <ThemeToggle />}
        </div>
      </div>
    </header>
  );
} 