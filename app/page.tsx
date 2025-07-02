"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LatestProject from "@/components/LatestProject";
import SocialLinks from "@/components/SocialLinks";
import BlogCardSection from "@/components/blog-card-section";
import FloatingBadge from "@/components/floating-badge";
import { Separator } from "@/components/ui/separator";
import { VideoPlayer } from "@/components/video-player";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="container">
        <Hero />
        <LatestProject />
        <SocialLinks />
      </div>
    </main>
  );
}
