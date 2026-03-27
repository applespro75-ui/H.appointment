# 🏥 Hospital Management System (HMS)

A modern, web-based hospital management and appointment booking system designed to streamline patient-receptionist interactions.

## ✨ Features

### 👤 Patient Portal
- Easy appointment booking interface
- Select doctors and available time slots
- Real-time appointment confirmation
- Shareable booking link via receptionist

### 👩‍💼 Receptionist Dashboard
- Secure login with email verification
- Manage hospital appointments
- View daily appointment statistics
- Generate and share patient booking links
- Automatic cleanup of old appointments
- Profile management

### 🎨 Modern UI/UX
- Dark theme with smooth animations
- Responsive design for all devices
- Intuitive role-based navigation
- Professional gradient effects and card layouts

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Firebase (Authentication + Firestore Database)
- **Hosting:** Firebase Hosting / Any static hosting
- **Dependencies:** Firebase SDK 10.7.1

## 📁 Project Structure

```
HMS/
├── index.html                  # Landing page with role selection
├── patient-appointment.html    # Patient booking interface
├── receptionist-login.html     # Receptionist authentication
├── receptionist-profile.html   # Profile management
├── dashboard.html              # Receptionist dashboard
├── appointments.html           # Appointment management
├── firebase-config.js          # Firebase configuration & exports
├── package.json                # Project metadata & scripts
└── README.md                   # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (optional, for local server)
- A Firebase project with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TitanXS75/Hospital-Mgmt.git
   cd Hospital-Mgmt
   ```

2. **Configure Firebase**
   - Update `firebase-config.js` with your Firebase credentials
   - Enable Email/Password authentication in Firebase Console
   - Set up Firestore database rules

## 📱 Usage

### For Receptionists
1. Register with your hospital email
2. Verify your email address
3. Login to access the dashboard
4. Share the patient booking link with patients
5. Manage appointments from the dashboard

### For Patients
1. Click "I am a Patient" on the landing page
2. Fill in appointment details
3. Submit the form to book an appointment
4. Receive confirmation
`

### Customization
- Update hospital information in receptionist registration
- Modify color schemes in CSS files
- Add additional features as needed

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

**Built with ❤️ using Firebase and Modern Web Technologies**
