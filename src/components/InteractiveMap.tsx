/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Network, HelpCircle, Shield, ArrowRight, Zap } from 'lucide-react';

export default function InteractiveMap() {
  const [activeNode, setActiveNode] = useState<string>('Aviation Safety');

  const nodeDetails: Record<string, { role: string; connection: string }> = {
    'Aviation Safety': {
      role: 'The Central Axis / Ultimate Priority',
      connection: 'The core metric. Everything, from a single passenger checking in to a minister drafting a civil aviation act, rotates around maintaining flawless, safe flight operations.'
    },
    'Government': {
      role: 'Policy Formulation & Infrastructure Funding',
      connection: 'Powers the Regulators with statutory authority and secures capital to deploy standard airfield radar, runways, and emergency equipment.'
    },
    'Regulators': {
      role: 'Standard Enforcement & Compliance Audits',
      connection: 'Validates airline operational safety, issues carrier licenses, and checks controller and engineer readiness against international criteria.'
    },
    'Airlines': {
      role: 'Active Flight Operations & Safety Culture',
      connection: 'Deploys airworthy aircraft, implements Crew Resource Management (CRM), and supports non-punitive incident reporting for flight decks.'
    },
    'Airports': {
      role: 'Ground Security & Airfield Integrity',
      connection: 'Maintains obstacle-free runways, clears foreign object debris (FOD), manages fire response teams, and ensures bird-hazard compliance.'
    },
    'ATC': {
      role: 'Air Traffic Control & Collision Separation',
      connection: 'Actively monitors flight paths, maintains safe spacing in congested Lagos skies, and guides captains safely through extreme weather.'
    },
    'Engineers': {
      role: 'Aircraft Airworthiness & Scheduled Overhauls',
      connection: 'Executes detailed maintenance cycles, verifies engine systems, and blocks flight dispatches if technical anomalies exist.'
    },
    'Training': {
      role: 'Professional Competencies & Sim Training',
      connection: 'Drills flight crews under extreme simulated emergencies (SIMS) to build flawless muscle memories and critical thinking skills.'
    },
    'Technology': {
      role: 'Predictive Diagnostics & Telemetry Tools',
      connection: 'Deploys ADS-B radar, intelligent cloud black boxes, flight recorders, and digital predictive maintenance trackers.'
    },
    'Oil & Gas': {
      role: 'Fuel Quality Control & Chemical Integrity',
      connection: 'Fuels turbine engines with absolute contaminant-free Jet A-1 fuel, which is crucial to avoid dual engine failure on takeoff.'
    },
    'Banks': {
      role: 'Financing Infrastructure & Simulators',
      connection: 'Directs structured institutional capital to purchase younger fleets and modern Level D simulators, making safety easier to fund.'
    },
    'Industry': {
      role: 'Private Sector Support & Cargo Logistical Compliance',
      connection: 'Adheres strictly to weight and hazardous material codes on freight shipments, ensuring cabin and airframe stability.'
    },
    'Investors': {
      role: 'Strategic Asset Funding & Safety Bonds',
      connection: 'Backs regional aviation growth by investing in certified carrier startups and high-efficiency airport construction projects.'
    },
    'Passengers': {
      role: 'Compliance, Trust & Active Vigilance',
      connection: 'The ultimate beneficiaries. Comply with crew mandates, behave responsibly, and trust the air safety system.'
    }
  };

  const hierarchy = [
    { level: 'Level 1: Sovereign Authority', nodes: ['Government'] },
    { level: 'Level 2: Strategic Control', nodes: ['Regulators'] },
    { level: 'Level 3: Ground & Sky Operations', nodes: ['Airlines', 'Airports', 'ATC'] },
    { level: 'Level 4: Technical & Human Assets', nodes: ['Engineers', 'Training', 'Technology'] },
    { level: 'Level 5: Commercial Support', nodes: ['Oil & Gas', 'Banks', 'Industry'] },
    { level: 'Level 6: Capital Resource', nodes: ['Investors'] },
    { level: 'Level 7: System Beneficiary', nodes: ['Passengers'] }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#D4AF37] font-mono tracking-widest text-xs uppercase font-bold flex items-center justify-center space-x-1.5">
            <Network className="h-4 w-4" />
            <span>INTERACTIVE MAP</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0A192F] tracking-tight">
            THE SAFETY ECOSYSTEM RELATIONSHIP GRAPH
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto"></div>
          <p className="text-sm sm:text-base text-[#5A6E85] font-light leading-relaxed">
            Aviation safety is a synchronized cascade. See how each sector feeds directly into the central safe-sky axis. Click on any node below to map out its connection parameters.
          </p>
        </div>

        {/* Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Graph Display (Col 7) */}
          <div className="lg:col-span-7 bg-[#0A192F] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/20 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
            
            <div className="relative z-10 flex flex-col items-center space-y-5">
              {hierarchy.map((lvl, lIdx) => (
                <div key={lIdx} className="w-full space-y-2 flex flex-col items-center">
                  <span className="text-[8px] font-mono tracking-widest text-[#8A99AD] uppercase">
                    {lvl.level}
                  </span>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {lvl.nodes.map((node) => (
                      <button
                        key={node}
                        onClick={() => setActiveNode(node)}
                        className={`px-3 py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                          activeNode === node
                            ? 'bg-[#D4AF37] text-[#0A192F] border-[#D4AF37] shadow-lg scale-105'
                            : 'bg-white/5 text-[#E2E8F0] border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10'
                        }`}
                      >
                        {node}
                      </button>
                    ))}
                  </div>

                  {lIdx < hierarchy.length - 1 && (
                    <div className="h-4 w-px bg-gradient-to-b from-[#D4AF37]/30 to-[#D4AF37]/10 my-1"></div>
                  )}
                </div>
              ))}

              {/* Central Axis Indicator Node */}
              <div className="w-full pt-4 border-t border-white/10 flex flex-col items-center">
                <span className="text-[8px] font-mono tracking-widest text-[#8A99AD] uppercase mb-1">Central Core Node</span>
                <button
                  onClick={() => setActiveNode('Aviation Safety')}
                  className={`px-6 py-3.5 rounded-xl text-xs font-serif font-black tracking-widest uppercase transition-all duration-200 border-2 ${
                    activeNode === 'Aviation Safety'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89025] text-[#0A192F] border-[#D4AF37] shadow-xl'
                      : 'bg-white/10 text-white border-white/20 hover:border-[#D4AF37]'
                  }`}
                >
                  AVIATION SAFETY
                </button>
              </div>

            </div>
          </div>

          {/* Details Sidebar (Col 5) */}
          <div className="lg:col-span-5 bg-[#FCFBF7] border border-[#D4AF37]/20 p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between h-full relative">
            <div className="space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-[#0A192F] text-white rounded-lg">
                  <Shield className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest uppercase block">NODE PROFILE</span>
                  <h3 className="text-base sm:text-lg font-serif font-black text-[#0A192F] uppercase">
                    {activeNode}
                  </h3>
                </div>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="space-y-4">
                <div>
                  <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">Functional Role:</p>
                  <p className="text-sm font-bold text-[#0A192F] mt-0.5">
                    {nodeDetails[activeNode]?.role}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">Cascade Interaction:</p>
                  <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed font-light mt-1">
                    {nodeDetails[activeNode]?.connection}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-[9px] font-mono text-gray-400 flex items-center justify-between">
              <span>ACTIVE SCHEMA LINKED</span>
              <span className="text-[#D4AF37] font-bold">100% CONCENTRATE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
