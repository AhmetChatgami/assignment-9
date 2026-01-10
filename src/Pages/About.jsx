import React from "react";

const About = () => {
  return (
    <div>
      <div className="m-4">
        <div className="my-6">
            <title>About Us</title>
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>
            Welcome to Toy Topia 🎁 — a place where fun, imagination, and
            quality come together. At Toy Topia, we believe toys are more than
            just playthings. They help children learn, grow, and create memories
            that last a lifetime. Our mission is to provide safe, high-quality,
            and exciting toys that bring joy to kids and peace of mind to
            parents. This platform is built using modern technologies like React
            and Firebase, ensuring a fast, secure, and smooth experience for our
            users. From browsing toys to managing orders, we focus on
            simplicity, performance, and reliability.
          </p>
        </div>

        <div className="my-4">
          <h2 className="text-xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Wide collection of fun and educational toys</li>
            <li>Secure and reliable platform</li>
            <li>Fast & user-friendly experience</li>
            <li>Built with modern web technologies</li>
          </ul>
          <p className="py-2">
            We are constantly improving and adding new features to make Toy
            Topia better every day. Thank you for being part of our journey!
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Short & Simple Version</h2>
          <p className="text-xl py-1.5">About Us</p>
          <p>
            Toy Topia is an online toy platform built with modern web technology
            to deliver a smooth and enjoyable shopping experience. We focus on
            quality toys, user-friendly design, and secure performance to make
            toy shopping easy and fun for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
