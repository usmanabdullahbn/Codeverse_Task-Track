'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Check, Smartphone, Monitor } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('web');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="text-lg sm:text-xl font-bold text-primary truncate">TaskTrack</div>
              <span className="hidden sm:inline text-xs font-semibold text-muted-foreground px-2 py-1 bg-muted rounded-full whitespace-nowrap">by CodeVerse</span>
            </div>
            <div className="hidden md:flex gap-6 lg:gap-8">
              <a href="#overview" className="text-sm hover:text-primary transition-colors">Overview</a>
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#screenshots" className="text-sm hover:text-primary transition-colors">Screenshots</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="md:hidden flex gap-4">
              <a href="#overview" className="text-xs hover:text-primary transition-colors">Overview</a>
              <a href="#features" className="text-xs hover:text-primary transition-colors">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-pretty">
                TaskTrack
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-primary text-pretty">
                Smart Task Management for Field Operations
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                A comprehensive task tracking application designed to streamline field operations, improve team collaboration, and provide real-time visibility into project progress.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Real-time task updates and notifications</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">Role-based access control (Admin, Manager, Employee)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">GPS tracking and employee timeline visualization</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="overview" className="border-t border-border bg-secondary/5 px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">The Problem</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Field service teams were struggling with scattered task information across multiple platforms. Project managers couldn't track real-time progress, customers couldn't verify work completion, and employees spent more time updating spreadsheets than completing actual tasks.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Traditional tools were expensive, complex, and didn't cater to field-specific workflows like GPS tracking, photo documentation, and signature verification.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">The Solution</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                TaskTrack brings all essential features into one intuitive platform:
              </p>
              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">✓</div>
                  </div>
                  <span className="text-sm sm:text-base"><strong>Centralized Dashboard:</strong> View all tasks, customers, and projects at a glance</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">✓</div>
                  </div>
                  <span className="text-sm sm:text-base"><strong>Mobile App:</strong> Field employees track tasks with photo capture and signatures</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">✓</div>
                  </div>
                  <span className="text-sm sm:text-base"><strong>Timeline Tracking:</strong> GPS-based employee routes and task completion timelines</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold flex-shrink-0">✓</div>
                  </div>
                  <span className="text-sm sm:text-base"><strong>Instant Notifications:</strong> Real-time updates on task status changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Key Features</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">📋</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Create, assign, and track tasks with detailed status updates, estimated durations, and deadline monitoring.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">👥</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer & Asset Tracking</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Maintain detailed customer records with location data, associated projects, orders, and equipment assets.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">📸</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Photo & Signature Capture</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Field employees capture initial and final photos of work areas plus customer signatures for verification.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">🗺️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">GPS Timeline Visualization</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Track employee routes with GPS coordinates and visualize task timelines on an interactive map.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">📱</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Responsive interface optimized for field work on smartphones and tablets with offline capabilities.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">🔐</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Role-Based Access</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Admin, Manager, and Employee roles with granular permissions for data security and workflow management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="border-t border-border bg-secondary/5 px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">User Interface Showcase</h2>
          
          {/* Tab Toggle */}
          <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'web'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
              Web Platform
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                activeTab === 'mobile'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              Mobile App
            </button>
          </div>

          {/* Web Screenshots */}
          {activeTab === 'web' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-lg border border-border overflow-hidden bg-card">
                <div className="bg-muted p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-semibold">Dashboard - Overview</p>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 sm:p-8">
                  <div className="text-center">
                    <Monitor className="w-12 h-12 sm:w-16 sm:h-16 text-primary/30 mx-auto mb-3 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Summary Dashboard with Customer, Project, Order, Asset, and Task counts</p>
                    <p className="text-xs text-muted-foreground mt-2">Recent task activity table with employee performance tracking</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold">Customer Management</p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center">
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground">Edit customer details with map integration</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold">Asset Management</p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center">
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground">Track equipment and assets across projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold">Task Management</p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center">
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground">Create and assign tasks to employees with full details</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold">Employee Timeline</p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4 sm:p-6">
                    <div className="text-center">
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-2" />
                      <p className="text-xs sm:text-sm text-muted-foreground">GPS tracking with interactive map and route visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Screenshots */}
          {activeTab === 'mobile' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Login Screen</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Dashboard</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Work Orders</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Asset Details</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Task Details</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Verification</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Start Task</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden bg-card">
                  <div className="bg-muted p-2 sm:p-3">
                    <p className="text-xs font-semibold truncate">Complete</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-3 sm:p-4">
                    <Smartphone className="w-7 h-7 sm:w-10 sm:h-10 text-primary/30" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border overflow-hidden bg-card">
                <div className="bg-muted p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-semibold">Mobile Features</p>
                </div>
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Dashboard:</strong> Quick overview of task statuses</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Work Orders:</strong> Browse and search customer orders</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Asset Tracking:</strong> View assets per order</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Task Execution:</strong> Step-by-step task flow</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Location Verification:</strong> GPS-based checking</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-xs sm:text-sm"><strong>Bottom Navigation:</strong> Quick access menu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Technical Architecture</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">Frontend Stack</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">React Native (Expo)</p>
                    <p className="text-sm text-muted-foreground">Cross-platform mobile application</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">React + TypeScript</p>
                    <p className="text-sm text-muted-foreground">Web dashboard for managers and admins</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">Tailwind CSS</p>
                    <p className="text-sm text-muted-foreground">Responsive UI with modern design</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">Google Maps API</p>
                    <p className="text-sm text-muted-foreground">GPS tracking and route visualization</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">Backend Stack</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">Node.js + Express</p>
                    <p className="text-sm text-muted-foreground">RESTful API for all operations</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">MongoDB</p>
                    <p className="text-sm text-muted-foreground">NoSQL database for scalable data storage</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">JWT Authentication</p>
                    <p className="text-sm text-muted-foreground">Secure user authentication and authorization</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">→</span>
                  <div>
                    <p className="font-semibold">Real-time Updates</p>
                    <p className="text-sm text-muted-foreground">WebSocket for live task status notifications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="border-t border-border bg-secondary/5 px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">User Workflow</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-5 text-center">
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold mb-2 sm:mb-4 text-sm sm:text-base">1</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Admin Setup</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Configure customers, projects, assets</p>
            </div>

            <div className="hidden md:flex items-center justify-center md:col-span-1 md:mb-8">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground rotate-90" />
            </div>

            <div className="rounded-lg border border-border bg-card p-4 sm:p-6 md:col-span-2">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold mb-2 sm:mb-4 text-sm sm:text-base">2</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Manager Assigns</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Create and assign work orders</p>
            </div>

            <div className="hidden md:flex items-center justify-center md:col-span-1 md:mb-8">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground rotate-90" />
            </div>

            <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold mb-2 sm:mb-4 text-sm sm:text-base">3</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Employee Works</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Verifies and completes tasks</p>
            </div>

            <div className="col-span-full flex items-center justify-center my-3 sm:my-4">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
            </div>

            <div className="col-span-full rounded-lg border border-border bg-card p-4 sm:p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold mb-2 sm:mb-4 text-sm sm:text-base">4</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Real-time Tracking & Completion</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Managers receive instant updates, view GPS tracking, and confirm task completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
            Interested in learning more about TaskTrack or discussing a custom implementation for your business?
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center">
            <Link
              href="mailto:codeverse300@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Send Email
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:bg-primary/5 transition-colors text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/5 px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6 sm:mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0">
                  <Image 
                    src="/codeverse-logo.png" 
                    alt="CodeVerse Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                CodeVerse
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Smart task management solutions</p>
              <div className="space-y-1 sm:space-y-2 text-xs text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">📞</span>
                  <a href="tel:+923292020035" className="hover:text-foreground break-all">0329-2020035</a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">📧</span>
                  <a href="mailto:codeverse300@gmail.com" className="hover:text-foreground break-all">codeverse300@gmail.com</a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">📍</span>
                  <span className="text-xs">71A Street 3, Block A, SMCHS, Karachi</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">TaskTrack</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#overview" className="text-muted-foreground hover:text-foreground">Overview</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#screenshots" className="text-muted-foreground hover:text-foreground">Screenshots</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Product</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">How it works</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Connect</h4>
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:codeverse300@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8">
            <p className="text-center text-xs sm:text-sm text-muted-foreground">
              © 2025 TaskTrack. All rights reserved. | Powered by CodeVerse
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
