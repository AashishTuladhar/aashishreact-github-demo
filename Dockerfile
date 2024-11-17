# Use the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose Vite's default dev server
EXPOSE 5173

# Command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]