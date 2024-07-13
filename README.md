# Tiny Code

Tiny COde is a modern web application designed to help developers manage and share code snippets efficiently. Built with Next.js, Prisma, and Tailwind CSS, it offers a robust platform for organizing and customizing your code snippets.

## Features

- **User Authentication**: Secure login via GitHub using NextAuth.
- **Snippet Management**: Create, update, and delete your code snippets with ease.
- **Tagging System**: Organize your snippets with tags for quick retrieval.
- **View Tracking**: Keep track of how many times your snippets have been viewed.
- **Rate Limiting**: Protects the API from abuse and ensures fair usage.
- **Customization**: Personalize your snippets with various themes, font sizes, and colors.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Prisma**: ORM for efficient database management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed programming language for enhanced development experience.
- **NextAuth**: Authentication library for Next.js applications.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A GitHub account for authentication

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/eraykeskinmac/code-snippet.git
   cd code-snippet
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   DATABASE_URL="your_database_url"
   GITHUB_ID="your_github_oauth_id"
   GITHUB_SECRET="your_github_oauth_secret"
   NEXTAUTH_SECRET="your_nextauth_secret"
   ```

4. Run database migrations:
   ```
   npx prisma migrate dev
   ```

5. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Contains the main application code and API routes.
- `components/`: Reusable React components.
- `lib/`: Utility functions and shared code.
- `prisma/`: Database schema and migrations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
