export const opportunities = [
  {
    id: 1,
    title: 'Summer Research Fellowship',
    org: 'Open to all colleges',
    type: 'Fellowship',
    tag: 'badge-green',
    deadline: 'Rolling',
    description: 'A guided research experience for undergrads curious about science, tech, or social impact — mentorship included.',
  },
  {
    id: 2,
    title: 'Content & Design Internship',
    org: 'Struggle of Student',
    type: 'Internship',
    tag: 'badge-orange',
    deadline: 'Open now',
    description: 'Help us tell student stories — write, design, or shoot content for our community and socials.',
  },
  {
    id: 3,
    title: 'National Case Study Challenge',
    org: 'Partner Program',
    type: 'Competition',
    tag: 'badge-blue',
    deadline: 'Closes soon',
    description: 'Team up and solve a real business problem for a shot at prizes, mentorship, and interview fast-tracks.',
  },
  {
    id: 4,
    title: 'Scholarship Access Program',
    org: 'Community Fund',
    type: 'Scholarship',
    tag: 'badge-green',
    deadline: 'Rolling',
    description: 'Financial support and guidance for students navigating college costs — no essay marathon required.',
  },
]

export const careers = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Partner Startup',
    location: 'Remote',
    type: 'Internship',
  },
  {
    id: 2,
    title: 'Social Media Associate',
    company: 'Struggle of Student',
    location: 'Hybrid',
    type: 'Part-time',
  },
  {
    id: 3,
    title: 'Campus Growth Intern',
    company: 'Partner Network',
    location: 'On-campus',
    type: 'Internship',
  },
  {
    id: 4,
    title: 'Data Analyst Trainee',
    company: 'Partner Program',
    location: 'Remote',
    type: 'Traineeship',
  },
]

export const talents = [
  { id: 1, name: 'Sai Charan Reddy', skill: 'Digital Art', achievement: 'Illustrated our 2025 event poster series', variant: 'coral', image: '/images/talent-aarav-mehta.webp' },
  { id: 2, name: 'Sravani Naidu', skill: 'Spoken Word', achievement: 'Opened our Founders Day with an original poem', variant: 'pink', image: '/images/talent-sneha-kulkarni.webp' },
  { id: 3, name: 'Nikhil Varma', skill: 'Web Development', achievement: 'Built a campus event tracker used by 400+ students', variant: 'sky', image: '/images/talent-rohan-das.webp' },
  { id: 4, name: 'Haritha Reddy', skill: 'Photography', achievement: 'Shot the lookbook for our volunteer orientation', variant: 'sun', image: '/images/talent-priya-nair.webp' },
  { id: 5, name: 'Vamsi Krishna', skill: 'Music Production', achievement: 'Composed the theme for our podcast series', variant: 'purple', image: '/images/talent-kabir-singh.webp' },
  { id: 6, name: 'Keerthana Rao', skill: 'Public Speaking', achievement: 'Represented SOS at the National Student Summit', variant: 'green', image: '/images/talent-ishita-rao.webp' },
]

export const pastEvents = [
  {
    id: 1,
    title: 'Founders Day Meetup',
    date: 'March 2026',
    location: 'Pune Community Hall',
    description: 'Our biggest gathering yet — 300+ students, talent performances, and the launch of the Ambassador Program.',
    variant: 'coral',
    image: '/images/event-founders-day.webp',
  },
  {
    id: 2,
    title: 'Career Clarity Workshop',
    date: 'January 2026',
    location: 'Online',
    description: 'A hands-on session on resumes, interviews, and finding internships that actually fit you.',
    variant: 'sky',
    image: '/images/event-career-workshop.webp',
  },
  {
    id: 3,
    title: 'Winter Volunteer Drive',
    date: 'December 2025',
    location: 'Multiple campuses',
    description: 'Volunteers ran donation and mentorship drives across five campuses over the winter break.',
    variant: 'green',
    image: '/images/event-volunteer-drive.webp',
  },
]

export const upcomingEvents = [
  {
    id: 1,
    title: 'Talent Open Mic Night',
    date: '15 Nov 2026',
    location: 'Online + Pune',
    description: 'Sign up to perform, showcase, or just come cheer on fellow students.',
    registrationUrl: '#volunteer',
    variant: 'pink',
    image: '/images/event-open-mic-night.webp',
    volunteerCapacity: 20,
    volunteerCount: 14,
  },
  {
    id: 2,
    title: 'Campus Ambassador Kickoff',
    date: '2 Dec 2026',
    location: 'Online',
    description: 'Orientation for all new Campus Ambassadors joining this cycle.',
    registrationUrl: '/ambassador',
    variant: 'purple',
    image: '/images/event-ambassador-kickoff.webp',
    volunteerCapacity: 10,
    volunteerCount: 10,
  },
]

// Placeholder — once the `meetings` table in Supabase has rows, those are
// shown instead. Shape matches what the Meetings page expects from Supabase.
export const meetingsPlaceholder = [
  {
    id: 'placeholder-1',
    title: 'Resume & LinkedIn Teardown',
    description: 'Bring your resume — we review it live and fix it together, section by section.',
    platform: 'Zoom',
    scheduled_at: '2026-11-20T15:00:00+05:30',
    duration_minutes: 75,
    capacity: 40,
    registration_count: 22,
    join_url: null,
    is_past: false,
  },
  {
    id: 'placeholder-2',
    title: 'Internship Hunt: Where to Actually Look',
    description: 'A no-fluff walkthrough of where real internships get posted, and how to not get ghosted.',
    platform: 'Zoom',
    scheduled_at: '2026-12-05T18:30:00+05:30',
    duration_minutes: 60,
    capacity: 50,
    registration_count: 50,
    join_url: null,
    is_past: false,
  },
]

export const teamMembers = [
  { id: 1, name: 'Ananya Deshmukh', role: 'Operations Lead', variant: 'coral', image: null },
  { id: 2, name: 'Rahul Mehta', role: 'Partnerships Lead', variant: 'sky', image: null },
  { id: 3, name: 'Fathima Shaikh', role: 'Content Lead', variant: 'pink', image: null },
  { id: 4, name: 'Dev Patil', role: 'Design Lead', variant: 'sun', image: null },
  { id: 5, name: 'Meera Krishnan', role: 'Volunteer Coordinator', variant: 'purple', image: null },
  { id: 6, name: 'Arjun Nair', role: 'Tech Lead', variant: 'green', image: null },
  { id: 7, name: 'Sanya Kapoor', role: 'Events Lead', variant: 'coral', image: null },
  { id: 8, name: 'Vivaan Joshi', role: 'Ambassador Program Lead', variant: 'sky', image: null },
]

export const leadership = [
  {
    id: 1,
    name: 'Rohit Kulkarni',
    designation: 'Founder',
    bio: 'Started Struggle of Student out of a college WhatsApp group — now building it into a community-first platform for students across India.',
    image: null,
    variant: 'coral',
  },
  {
    id: 2,
    name: 'Isha Bhatt',
    designation: 'Director — Programs',
    bio: 'Leads volunteer programs, events, and the Campus Ambassador network end to end.',
    image: null,
    variant: 'sky',
  },
  {
    id: 3,
    name: 'Karan Malhotra',
    designation: 'Director — Partnerships',
    bio: 'Builds relationships with companies and organizations to bring real opportunities to students.',
    image: null,
    variant: 'purple',
  },
]

export const placements = [
  {
    id: 1,
    company: 'Brightwave Technologies',
    studentsPlaced: 6,
    roles: ['Frontend Developer', 'QA Associate'],
    students: ['Priya Nair', 'Rohan Das', 'Kabir Singh'],
    variant: 'sky',
  },
  {
    id: 2,
    company: 'Northline Consulting',
    studentsPlaced: 4,
    roles: ['Business Analyst Intern'],
    students: ['Sneha Kulkarni', 'Aarav Mehta'],
    variant: 'coral',
  },
  {
    id: 3,
    company: 'Pixel & Co. Studio',
    studentsPlaced: 3,
    roles: ['Graphic Designer', 'Social Media Associate'],
    students: ['Ishita Rao'],
    variant: 'pink',
  },
  {
    id: 4,
    company: 'DataForge Analytics',
    studentsPlaced: 5,
    roles: ['Data Analyst Trainee'],
    students: [],
    variant: 'purple',
  },
]

export const services = [
  {
    id: 'band',
    title: 'SS Band',
    icon: 'music',
    variant: 'pink',
    summary: 'Live music for college fests, cultural nights, and community events.',
    provide: 'A full student band for performances — covers, originals, and fest-opening sets.',
    approach: 'Share your event date, venue, and expected crowd size at least 3 weeks in advance.',
    contact: 'SS Band Coordinator',
    email: 'band@struggleofstudent.com',
  },
  {
    id: 'events',
    title: 'SS Event Management',
    icon: 'calendar',
    variant: 'coral',
    summary: 'End-to-end planning and execution for college fests, meetups, and workshops.',
    provide: 'Planning, on-ground volunteer teams, logistics, and promotion support for student events.',
    approach: 'Reach out with your event concept and rough date — we scope it together from there.',
    contact: 'Events Team',
    email: 'events@struggleofstudent.com',
  },
  {
    id: 'it',
    title: 'SS IT Solutions',
    icon: 'code',
    variant: 'sky',
    summary: 'Websites, apps, and tech support built by students, for student orgs and small businesses.',
    provide: 'Websites, event registration tools, and basic app development at student-friendly rates.',
    approach: 'Send a short brief of what you need built and your timeline.',
    contact: 'Tech Team',
    email: 'tech@struggleofstudent.com',
  },
  {
    id: 'guidance',
    title: 'Student Problems & Guidance',
    icon: 'heart-handshake',
    variant: 'green',
    summary: 'A confidential space to talk through academic stress, career confusion, or personal struggles.',
    provide: 'One-on-one guidance sessions with peer mentors and, where needed, referrals to professionals.',
    approach: 'Message us directly — all conversations are kept confidential.',
    contact: 'Guidance & Support',
    email: 'support@struggleofstudent.com',
  },
  {
    id: 'careers',
    title: 'Career & Internship Opportunities',
    icon: 'briefcase',
    variant: 'sun',
    summary: 'Curated internships, jobs, and career guidance sourced from our partner network.',
    provide: 'Verified internship and job postings, resume reviews, and interview prep sessions.',
    approach: 'Check the Opportunities and Careers pages, or ask us directly if you\'re looking for something specific.',
    contact: 'Careers Team',
    email: 'careers@struggleofstudent.com',
  },
  {
    id: 'other',
    title: 'Something Else?',
    icon: 'sparkles',
    variant: 'purple',
    summary: 'Collaborations, talent showcases, sponsorships, or an idea that doesn\'t fit a neat category.',
    provide: 'If it helps students grow or connect, we\'re open to exploring it with you.',
    approach: 'Just tell us what you have in mind — we\'ll figure out the right fit together.',
    contact: 'General Enquiries',
    email: 'hello@struggleofstudent.com',
  },
]

export const galleryImages = [
  { id: 1, label: 'Community meetup', variant: 'coral', image: '/images/gallery-community-meetup.webp' },
  { id: 2, label: 'Talent showcase', variant: 'pink', image: '/images/gallery-talent-showcase.webp' },
  { id: 3, label: 'Volunteer drive', variant: 'green', image: '/images/gallery-volunteer-drive.webp' },
  { id: 4, label: 'Workshop session', variant: 'sky', image: '/images/gallery-workshop-session.webp' },
  { id: 5, label: 'Ambassador kickoff', variant: 'sun', image: '/images/gallery-ambassador-kickoff.webp' },
  { id: 6, label: 'Open mic night', variant: 'purple', image: '/images/gallery-open-mic-night.webp' },
]

// LinkedIn omitted until a Page URL is available — add it back here when ready.
export const socialLinks = [
  { id: 'whatsapp', label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/I9OSqm30mAM5wEnUhDN17Y?s=cl&p=a&mlu=4&iam=0' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/struggle.of.student?stkn=MW50cWRiZHIwOXA5NQ==' },
  { id: 'youtube', label: 'YouTube', href: 'https://m.youtube.com/@struggleofstudents-o30' },
]
