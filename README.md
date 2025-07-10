# ✨ Alvana.AI ✨

  **Real-time AI-powered meetings with transcripts, summaries, and post-call intelligence.**

---

## 🧠 Overview

**Alvana.AI** is a cutting-edge platform that transforms how you manage meetings. With real-time video/audio calls powered by custom AI agents, seamless transcript generation, intelligent summaries, and a smart post-call experience, Alvana.AI helps you never miss a detail.

Whether you're collaborating with your team or reviewing past calls, Alvana.AI ensures that insights are always at your fingertips.

---

## ✨ Key Features

1. **🎥 Real-time video/audio calls with custom AI agents**
   - Seamless media streaming using Stream Video & Chat SDKs  
   - Custom AI agents powered by OpenAI for interactive call participation

2. **📄 Background processing for transcripts & summaries**
   - Background job pipelines for transcript generation and summarization  
   - Reliable and scalable async processing with Inngest

3. **📊 Post-call intelligence & insights**
   - **Full meeting playback**  
   - **Timestamped transcripts** for easy browsing  
   - **Transcript search** to find key moments quickly  
   - **AI Q&A assistant** trained on your meeting to answer contextual questions

---

## 🔍 Core Features (Detailed)

- **AI-Powered Live Video Calls**: Host real-time meetings with custom voice-enabled AI.
- **Custom Real-Time AI Agents**: Create intelligent agents that speak and interact during meetings.
- **Automated Post-Processing**: Transcripts, summaries, and video recordings processed via background jobs.
- **Meeting Dashboard**: View meeting history, status updates, and detailed metadata.
- **Transcript Search**: Instantly locate any spoken content from past meetings.
- **AI Q&A Assistant**: Ask contextual questions about your calls and get instant, smart answers.
- **Subscription Billing**: Stripe-based billing with modern UI via Polar.
- **Secure Authentication**: Email + social login with Better Auth.
- **Mobile-Responsive Design**: Beautiful, performant UI across all devices.

---

## 🧱 Tech Stack & Architecture

| Layer               | Technology Used                                       |
|---------------------|--------------------------------------------------------|
| **Frontend**         | Next.js 15, React 19, Tailwind CSS v4, shadcn/ui       |
| **Real-Time Media**  | Stream Video SDK, Stream Chat SDK                      |
| **Authentication**   | Better Auth (email + social)                           |
| **Database**         | Neon Postgres, Drizzle ORM                             |
| **API/Backend**      | tRPC for backend API routes                            |
| **Background Jobs**  | Inngest for async transcript/summarization pipelines   |
| **AI Integration**   | OpenAI for agents, transcript generation, and Q&A      |
| **Billing**          | Stripe integration via Polar                           |
| **Dev Workflow**     | GitHub PR flow with CodeRabbit reviews                 |

---

## 📸 Project Screenshots

- **🧠 Agents Page**  
  ![Agents Page](https://github.com/user-attachments/assets/3fbf3e66-c267-4e8f-8704-d04c46ddbbed)


- **📞 Meeting Page**  
  ![Meeting Page](https://github.com/user-attachments/assets/75217196-4e17-4746-ab7d-fdf71ae6aac2)

- **🛠️ Create Agent Page**  
  ![Create Agent](https://github.com/user-attachments/assets/17543507-9374-42e8-900b-ae44d75a730b)

- **🧠 AI Q&A Assistent Page**
   ![AI Q&A Chatbot](https://github.com/user-attachments/assets/b03365cc-cfa2-46d3-a101-c3587a28e62b)

- **💳 Subscription Page**  
  ![Subscription Page](https://github.com/user-attachments/assets/fdba678e-c05e-4ca8-8507-ca14d1ed5f89)


---

## 🧑‍💻 How to Run Locally

Follow these steps to get Alvana.AI running locally:

### ✅ Prerequisites

- Node.js (v18+)
- Git
- PostgreSQL or Neon DB
- Stripe account
- OpenAI API key
- Stream API credentials
- Inngest account

### 📦 1. Clone the Repository

```bash
git clone https://github.com/your-username/alvana.ai.git
cd alvana.ai
```

### 🔧 2. Install Dependencies

```bash
npm install
```

### 🛠️ 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
DATABASE_URL=your_postgres_connection_string
OPENAI_API_KEY=your_openai_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NEXT_PUBLIC_STREAM_APP_ID=your_stream_app_id
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 🧩 4. Run the Webhook Listener

Some features of Alvana.AI depend on background job events and webhooks — such as transcript generation, meeting summaries, or AI tasks.  
To run the webhook listener locally (using Inngest), use the following command:

```bash
npx inngest dev
```

### 🧪 5. Start the Development Server
``` bash
npm run dev
```
Your app will now be running at: [http://localhost:3000](http://localhost:3000)

## 📝 To-Do List

Here are a few key improvements planned for **Alvana.AI**:

- [ ] **Agent Customization UI**  
  Let users personalize their AI agents' tone, language style, and behavior for a more tailored meeting experience.

- [ ] **Meeting Export to PDF/Notion**  
  Enable users to export transcripts and summaries to PDF or directly sync with tools like Notion.

- [ ] **Team Workspaces**  
  Allow multiple users to collaborate within shared workspaces, making Alvana.AI ideal for teams.

- [ ] **Multi-language Support**  
  Add support for transcription and summaries in different languages for global accessibility.

---

📩 Got more ideas? [Email me](mailto:meetkhanpara094@gmail.com) — I'd love to hear them!

## 👨‍💻 Author  
**ReverseCoder1**  
🔗 [GitHub Profile](https://github.com/ReverseCoder1)  

📩 _Feel free to contribute, raise issues, or suggest improvements!_ 🎉  
