# # Use a Node.js base image with the desired version
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Build the SolidJS project
# # RUN npm run build

# # Expose the desired port (change it according to your application)
# EXPOSE 3000

# # Set the command to run when the container starts
# CMD ["npm", "run", "start"]

FROM nginx
COPY static-html-directory /usr/share/nginx/html