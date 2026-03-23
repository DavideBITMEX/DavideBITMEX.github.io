// ============================================================
// PROJECTS DATA — add new posts here
// Fields:
//   id:          unique string, matches the HTML filename in posts/
//   title:       post title
//   date:        "YYYY-MM-DD" — used for sorting (most recent first)
//   dateLabel:   "Month YYYY" — displayed on the card
//   categories:  array — one or more of the defined categories below
//   tags:        array of keyword strings
//   desc:        one or two sentences shown on the card
//   cover:       path to cover image relative to projects/ folder
//                e.g. "covers/my-post.jpg"
//                use "" if no image yet — a placeholder will show
// ============================================================

const CATEGORIES = [
  "Bioacoustics",
  "Noise Pollution",
  "Noise Mitigation",
  "Underwater Acoustics & Seismology",
  "Numerical Modeling",
  "Data Science",
  "Web Apps",
];

const POSTS = [
  {
    id: "post-4",
    title: "Building an Interactive Seismic Wave Visualiser",
    date: "2025-02-10",
    dateLabel: "Feb 2025",
    categories: ["Web Apps", "Numerical Modeling"],
    tags: ["JavaScript", "D3.js", "SPECFEM2D", "visualisation"],
    desc: "How I turned numerical simulation output into a browser-based interactive tool anyone can explore.",
    cover: "covers/post-4.jpg",
  },
  {
    id: "post-3",
    title: "Noise Mitigation Strategies for Pile Driving Operations",
    date: "2024-11-20",
    dateLabel: "Nov 2024",
    categories: ["Noise Mitigation", "Noise Pollution"],
    tags: ["bubble curtains", "pile driving", "offshore wind", "noise reduction"],
    desc: "A review of current acoustic shielding techniques and their effectiveness in reducing underwater noise from construction.",
    cover: "covers/post-3.jpg",
  },
  {
    id: "post-2",
    title: "Passive Acoustic Monitoring of Cetaceans in the North Atlantic",
    date: "2024-06-05",
    dateLabel: "Jun 2024",
    categories: ["Bioacoustics", "Data Science"],
    tags: ["PAM", "cetaceans", "FPOD", "bioacoustics", "WHOI"],
    desc: "An overview of the passive acoustic monitoring setup used during my time at WHOI, and what we found.",
    cover: "covers/post-2.jpg",
  },
  {
    id: "post-1",
    title: "Modelling T-Wave Propagation with SPECFEM2D",
    date: "2024-03-15",
    dateLabel: "Mar 2024",
    categories: ["Numerical Modeling", "Underwater Acoustics & Seismology"],
    tags: ["SPECFEM2D", "T-waves", "seismology", "numerical modeling"],
    desc: "A walkthrough of the simulation pipeline I built to model seismic T-wave propagation in ocean waveguides.",
    cover: "covers/post-1.jpg",
  },
];
