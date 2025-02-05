import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page - Kevin',
 description: 'About Page - Kevin',
 keywords: ['About Page', 'Kevin', 'Tecnologia']
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
} 