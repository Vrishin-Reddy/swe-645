# Use an official Nginx image as the base
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static content
RUN rm -rf ./*

# Copy your application files to the container
COPY . /usr/share/nginx/html

# Expose port 5000 for web traffic
EXPOSE 5000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]



