# Gta6

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/109taha/Gta6.git
cd Gta6
2. Install Dependencies
``` bash
npm install 
```
3. Set Up Environment Variables
Create a .env file in the root directory with the following content:
```PORT=4000
JWT_SECRET="your_jwt_secret_key_here"
X_API_KEY=ZeYti60Ztw4UXqCuwrAmB3Z8j
X_API_SECRET=A4sS2hNWAfeK9j9PFJ18AWAbzxHpXn3Fs0LjfUjm1je1xqqULz
X_BEARER_TOKEN=AAAAAAAAAAAAAAAAAAAAALhv1AEAAAAASe5BMw4M1vdjzvpsm3Dd%2BseQsqw%3Da8409HGvCjyEoAdCCMIkwMAkPU8Fsjmk8NC5rfUykm1AjNeRHO
```

4. Run the Application
Start the development server:
``` bash
npm start
```


Or use the development script (if available):
```bash
npm run dev
```

The server will be available at: http://localhost:4000

🌐 Available Endpoints
🔐 User Authentication
POST /api/auth/login
Description: Logs in a user and returns a JWT token.

GET /api/auth/me
Description: Retrieves the currently authenticated user's information.
Requires: JWT Bearer Token in Authorization header.

🐦 Twitter (X) Integration
GET /api/x/followers/:username
Description: Fetches followers of a specified X (Twitter) username.
Authentication: Uses X API Key and Bearer Token set in .env.