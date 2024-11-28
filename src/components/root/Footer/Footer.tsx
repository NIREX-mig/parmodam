"use client";

import React from "react";
import { InstagramGrid } from "./InstagramGrid";
import { SocialLinks } from "./SocialLinks";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[url(../public/assets/bg3.jpg)] text-white pt-5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Social Links */}
          <div className="lg:col-span-1">
            <SocialLinks />
          </div>

          {/* Instagram Grid */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-semibold mb-6 text-gladeGreen-500">
              Instagram
            </h3>
            <InstagramGrid />
          </div>

          {/* Logo and Navigation */}
          <div className="lg:col-span-7 lg:pl-12">
            <Logo />
            <div className="mt-8">
              <Navigation />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© 2024 - Parmodam Blog. Created by NIreX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
