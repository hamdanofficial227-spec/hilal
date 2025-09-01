"use client"
import React from "react";
import {Package,Search,Bell,User,Settings,BarChart3,Clock,Star,TrendingUp,Users,Shield,Zap,ShoppingCart,Car,Palette,Monitor,UserPlus,FileText,} from "lucide-react";
import Link from "next/link";

export default function ApplicationPortal() {
  const applications = [
    {
      id: 1,
      name: "Capital Expenditure",
      description: "Streamline capex requests, approvals, and budget tracking with automated workflows",
      icon: BarChart3,
      category: "Finance",
      status: "Active",
      users: 1247,
      lastUsed: "2 hours ago",
      rating: 4.8,
      color: "bg-blue-500",
      href: "https://hilalfoods.sharepoint.com/sites/capex/",
    },
    {
      id: 2,
      name: "Asset Disposal App",
      description: "Complete asset lifecycle management from procurement to disposal",
      icon: Package,
      category: "Operations",
      status: "Active",
      users: 892,
      lastUsed: "1 day ago",
      rating: 4.6,
      color: "bg-green-500",
      href: "https://hilalfoods.sharepoint.com/sites/AssetDisposalApp/",
    },
    {
      id: 3,
      name: "Gate Pass",
      description: "Digital gate pass system with visitor management and security protocols",
      icon: Shield,
      category: "Security",
      status: "Active",
      users: 2156,
      lastUsed: "30 minutes ago",
      rating: 4.9,
      color: "bg-red-500",
      href: "https://hilalfoods.sharepoint.com/sites/GatePassApp",
    },
    {
      id: 4,
      name: "Launch Authorization Form",
      description: "Real-time stock tracking, warehouse management, and supply chain optimization",
      icon: Package,
      category: "Operations",
      status: "Active",
      users: 634,
      lastUsed: "4 hours ago",
      rating: 4.5,
      color: "bg-purple-500",
      href: "https://hilalfoods.sharepoint.com/sites/LAF",
    },
    {
      id: 5,
      name: "Price Approval Form",
      description: "Dynamic pricing decisions with AI-powered recommendations and approval workflows",
      icon: TrendingUp,
      category: "Finance",
      status: "Active",
      users: 445,
      lastUsed: "1 hour ago",
      rating: 4.7,
      color: "bg-orange-500",
      href: "https://hilalfoods.sharepoint.com/sites/priceapprovalApp/SitePages/Home.aspx",
    },
    {
      id: 6,
      name: "Vendor Registration",
      description: "Comprehensive supplier onboarding, performance tracking, and relationship management",
      icon: Users,
      category: "Procurement",
      status: "Active",
      users: 789,
      lastUsed: "3 hours ago",
      rating: 4.4,
      color: "bg-teal-500",
      href: "https://hilalfoods.sharepoint.com/sites/vendorregistrationapp/",
    },
    {
      id: 7,
      name: "Product Complaint",
      description: "Efficiently manage and resolve customer product complaints with tracking",
      icon: Bell,
      category: "Customer Service",
      status: "Active",
      users: 512,
      lastUsed: "5 hours ago",
      rating: 4.3,
      color: "bg-yellow-500",
      href: "https://hilalfoods.sharepoint.com/sites/ProductComplaintApp",
    },
    {
      id: 8,
      name: "Customer Registration",
      description: "Seamless onboarding and digital registration process for new customers",
      icon: Users,
      category: "Sales",
      status: "Active",
      users: 956,
      lastUsed: "6 hours ago",
      rating: 4.5,
      color: "bg-indigo-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/013a1eea-ff05-49cf-9238-4273aa1772e5?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750231410",
    },
    {
      id: 9,
      name: "Delivery Challan",
      description: "Generate, track, and manage delivery challans digitally for logistics",
      icon: FileText,
      category: "Logistics",
      status: "Active",
      users: 721,
      lastUsed: "8 hours ago",
      rating: 4.6,
      color: "bg-teal-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/8af5c38c-3a32-49cb-b4f0-4f263352c0ba?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&hint=5427523c-5bab-46c2-a206-3e659271354c&sourcetime=1752750279181",
    },
    {
      id: 10,
      name: "Item Code Opening",
      description: "Simplify creation and approval of new item codes in the system",
      icon: Package,
      category: "Operations",
      status: "Active",
      users: 478,
      lastUsed: "10 hours ago",
      rating: 4.4,
      color: "bg-cyan-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/a6229fa9-0227-403d-bf6f-dfb40f8e1160?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750328256",
    },
    {
      id: 11,
      name: "Employee Onboarding",
      description: "Digitized employee onboarding process with workflows and checklists",
      icon: UserPlus,
      category: "HR",
      status: "Active",
      users: 653,
      lastUsed: "12 hours ago",
      rating: 4.7,
      color: "bg-emerald-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/5d48579a-e6d3-42bb-88ab-a8f0b88fdd7f?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750380139",
    },
    {
      id: 12,
      name: "MOC Management",
      description: "Management of Change workflows with proper approvals and audit trails",
      icon: Monitor,
      category: "Compliance",
      status: "Active",
      users: 332,
      lastUsed: "1 day ago",
      rating: 4.2,
      color: "bg-slate-500",
      href: "https://hilalfoods.sharepoint.com/sites/moc",
    },
    {
      id: 13,
      name: "Artwork Approval",
      description: "Digital approval process for packaging and marketing artwork",
      icon: Palette,
      category: "Marketing",
      status: "Active",
      users: 289,
      lastUsed: "2 days ago",
      rating: 4.3,
      color: "bg-violet-500",
      href: "https://hilalfoods.sharepoint.com/sites/ArtworkApprovalApp/SitePages/CollabHome.aspx",
    },
    {
      id: 14,
      name: "Vehicle Request",
      description: "Admin pool vehicle booking and approval management",
      icon: Car,
      category: "Admin",
      status: "Active",
      users: 415,
      lastUsed: "14 hours ago",
      rating: 4.4,
      color: "bg-rose-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/7cb702b0-b6e7-498c-b6df-8c9bb570679a?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750627027",
    },
    {
      id: 15,
      name: "Intra Buy",
      description: "Internal procurement and purchasing platform for employees",
      icon: ShoppingCart,
      category: "Procurement",
      status: "Active",
      users: 563,
      lastUsed: "16 hours ago",
      rating: 4.6,
      color: "bg-amber-500",
      href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/42052745-0e32-4b92-b435-74151609ba37?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752756118699",
    },

  ]

  const quickStats = [
    { label: "Total Users", value: "170", change: "+12%", icon: Users },
    { label: "Applications", value: "15", change: "+3", icon: Zap },
    { label: "Avg Response", value: "1.2s", change: "-0.3s", icon: Clock },
    { label: "Satisfaction", value: "4.7/5", change: "+0.2", icon: Star },
  ]

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className=" bg-white text-white p-6">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="bg-red-950 rounded-lg w-10 h-10 flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-sm">SP</span>
            </div>

            {/* Title + Subtitle */}
            <div>
              <h1 className="text-2xl text-black font-semibold">SharePoint Portal</h1>
              <p className="text-gray-900 text-sm">Application Management System</p>
            </div>
          </div>

          {/* Vision Badge */}
          <div className="bg-red-950 border border-red-900 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md">
            Vision 2030
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-6 bg-red-950 border border-neutral-700 rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-lg">
          {/* Left Side */}
          <div className="flex-shrink-0 text-center md:text-left">
            <h2 className="text-white font-bold text-sm lg:text-3xl text-center mb-1">VISION</h2>
            <div className="text-whtie font-extrabold text-5xl md:text-6xl leading-none">2030</div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <p className="text-gray-200 pt-3 text-sm md:text-base font-bold lg:text-2xl text-center text-balance leading-relaxed">
              To lead in innovation and sustainability, delivering
              best-in-class experiences
              that create joyful moments for our customers and enhance shareholder value.
            </p>
          </div>
        </div>
      </div>





      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white/80 transition-all duration-300 rounded-lg shadow-sm"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className="w-5 h-5 text-slate-600" />
                    <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Application Portfolio</h2>
          <p className="text-slate-600 text-lg">Access your enterprise applications and digital tools</p>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {applications.map((app) => {
            const IconComponent = app.icon
            return (
              <div
                key={app.id}
                className="group bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 rounded-lg"
              >
                <Link href={app.href}>
                  <div className="p-6">
                    {/* App Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-xs bg-slate-50 text-slate-600 border border-slate-200 rounded-md">
                          {app.category}
                        </span>
                      </div>
                    </div>

                    {/* App Info */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {app.name}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">{app.description}</p>

                    {/* App Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{app.users.toLocaleString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{app.rating}</span>
                        </span>
                      </div>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{app.lastUsed}</span>
                      </span>
                    </div>

                    {/* Launch Button */}
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 text-xs bg-green-50 text-green-700 border border-green-200 rounded-md">
                        ● {app.status}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <button className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg rounded-md transition-all">
                          Launch
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

      </main>
      <div className="py-8 text-center text-sm text-gray-400">© 2025 - Present Hilal Foods. All rights reserved.</div>
    </div>
  )
}
