import React from "react";

function About() {
  return (
    <div className="p-5 bg-[oklch(98.7%_0.026_102.212)] min-h-screen">
      <h2 className="text-lg md:text-3xl mb-3">About Us</h2>
      <p>
        Welcome to WorldPlatter, your trusted partner for fast, easy, and
        convenient food delivery. We bring your favorite meals from top
        restaurants straight to your doorstep with just a few taps. Whether
        you're craving something spicy, healthy, sweet, or comforting, we make
        sure delicious food is always within reach.
      </p>

      <h2 className="text-xl pt-3">Our Mission</h2>
      <p>
        Our mission is simple — to make food ordering effortless and enjoyable.
        We aim to connect customers with great local restaurants while ensuring
        quick delivery, secure payments, and a smooth experience from start to
        finish. What We Offer
        <ul>
          <li>
            {" "}
            🚀 Fast & Reliable Delivery - Fresh meals delivered on time, every
            time.
          </li>
          <li>
            🍔 Wide Range of Cuisines - Explore Indian, Chinese, Italian,
            Korean, Desserts, and more.
          </li>
          <li>
            💳 Multiple Payment Methods - Pay using UPI, Cash on Delivery,
            Cards, or Wallets.
          </li>
          <li>
            📍 Real-Time Order Tracking - Watch your order move from kitchen to
            doorstep.
          </li>
          <li>
            ⭐ Top Restaurant Partners - Quality food from trusted and popular
            restaurants.
          </li>
          <li>
            🛒 Easy Ordering Experience - Smooth UI, simple navigation, and
            one-tap reorders.
          </li>
        </ul>
      </p>

      <h2 className="text-xl pt-3">Why Choose Us? </h2>
      <p>
        We focus on fresh food, transparent service, and customer satisfaction.
        Every feature is designed to save you time, reduce effort, and make sure
        you enjoy every meal you order.
      </p>
    </div>
  );
}

export default About;
