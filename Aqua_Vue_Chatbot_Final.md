# PLUG-AND-PLAY CAFÉ CHATBOT
## CUSTOMIZED FOR AQUA VUE BEACHFRONT BAR & EATERY

---

## 🤖 READY-TO-USE CHATBOT FLOWS

### 1. WELCOME / START FLOW
**Trigger:** User sends DM or opens Messenger chat

**Bot Message:**
```
Hey 👋 Welcome to Aqua Vue! 🐋

Hervey Bay's favourite beachfront cafe ☕🌊

I can help you with:
• Menu & prices
• Today's specials
• Book a table
• Hours & location

What would you like to do?
```

**Quick Replies / Buttons:**
- 📍 Location & Hours
- 🍽️ View Menu
- 🛒 Order Now
- 📅 Book a Table
- ☕ Today's Special
- ❓ Ask a Question

---

### 2. LOCATION & HOURS FLOW
**User clicks:** Location & Hours

**Bot Message:**
```
📍 We're located at:

Aqua Vue Beachfront Bar & Eatery
415A Esplanade, Torquay
Hervey Bay QLD 4655

🌊 Beachfront location — stunning views!

🕒 OPENING HOURS:
Every Day: 6:30am – Midnight

👉 Tap below for directions:
```

**Buttons:**
- 📍 [Open in Google Maps](https://maps.google.com/?q=Aqua+Vue+Hervey+Bay)
- ☎️ [Call: 07 4125 5528](tel:0741255528)

---

### 3. MENU FLOW
**User clicks:** View Menu

**Bot Message:**
```
🍽️ Here's our menu! 👇

We serve breakfast, lunch & dinner ☕

Click below for our full menu:
```

**Buttons:**
- 📄 [Full Menu](https://www.aquavue.com.au/)
- 🌱 Vegan Options
- 🥐 Breakfast
- ☕ Coffee & Drinks

---

#### Subflow: Breakfast
**User clicks:** Breakfast

**Bot Message:**
```
🥐 BREAKFAST MENU ⭐
Available from 6:30am

OUR FAVES:
• Big Breakfast — $22.90
  Eggs, bacon, sausage, tomato, toast

• Avocado Smash — $18.90
  Sourdough, tomato, feta, chili

• Pancakes — $16.90
  Buttermilk, maple syrup, berries

• Breakfast Bowl — $17.90
  Eggs, spinach, chorizo, potato

• Bacon & Eggs — $14.90
  2 eggs, bacon, toast

What's your pick? 👇
```

**Buttons:**
- 🛒 Order Now
- 📅 Book a Table

---

#### Subflow: Coffee & Drinks
**User clicks:** Coffee & Drinks

**Bot Message:**
```
☕ COFFEE & DRINKS ⭐
From Seven Miles Coffee

ESPRESSO:
• Flat White — $4.50
• Latte — $4.50
• Cappuccino — $4.50
• Long Black — $4.00
• Mocha — $5.00

ICED:
• Iced Latte — $5.50
• Iced Mocha — $6.00
• Iced Coffee — $5.50

FRESH JUICES:
• Orange — $6.00
• Tropical — $6.50

SMOOTHIES — $7.50
Berry, Banana, Mango

Want one? 👇
```

**Buttons:**
- 🛒 Order Now
- 📞 Call to Order

---

#### Subflow: Vegan Options
**User clicks:** Vegan Options

**Bot Message:**
```
🌱 VEGAN & VEGETARIAN OPTIONS

Yes! We cater for everyone ✅

VEGAN:
• Avocado Smash (vegan bread)
• Veggie Bowl
• Oat milk latte (+$0.50)
• Fresh juices
• Garden salad

GIRLS: (Vegetarian)
• Veggie Brekkie — $15.90
•Spinach & feta omelette

🌿 Just ask our staff for today's specials!

What's your pick? 👇
```

**Buttons:**
- 🛒 Order Now
- ❓ Ask a Question

---

### 4. ORDER FLOW
**User clicks:** Order Now

**Bot Message:**
```
🛒 ORDER OPTIONS 👇

How would you like to order?
```

**Buttons:**
- 🛵 [Order via Website](https://www.aquavue.com.au/)
- 📱 Call to Order: 07 4125 5528
- 📍 Visit In-Store

---

### 5. BOOKING FLOW
**User clicks:** Book a Table

**Bot Message:**
```
📅 BOOK A TABLE 💫

Hervey Bay's best waterfront dining! 🌊

How many people?
```

**Collect:**
- Number of people

**Bot Message:**
```
Sweet! Which date works for you?

(Format: DD/MM/YYYY)
```

**Collect:**
- Date

**Bot Message:**
```
What time would you like?

(Format: HH:MM am/pm)
```

**Collect:**
- Time

**Bot Message:**
```
Almost done! 🙌

Your name:
```

**Collect:**
- Name

**Bot Message:**
```
And a phone number so we can confirm?
```

**Collect:**
- Phone number

**Bot Message:**
```
🎉 AWESOME! Thanks [NAME]!

Your booking:
👥 [X] people
📅 [DATE]
🕒 [TIME]
📍 Aqua Vue, 415A Esplanade

We'll send a confirmation SMS shortly! 💫

See you at the beach! 🐋☕
```

---

### 6. TODAY'S SPECIAL FLOW
**User clicks:** Today's Special

**Bot Message:**
```
🔥 TODAY'S SPECIALS ⭐

☕ COFFEE + PASTRY COMBO — $9.90
  Any coffee + daily pastry

🌊 BEACHFRONT Vibes
  Perfect for sunset!

🕐 Available until sold out

Want in? 👇
```

**Buttons:**
- 🛒 Order Now
- 📅 Book a Table
- 📍 Get Directions

---

### 7. FAQ FLOW (Most Common Questions)

| Question | Bot Answer |
|----------|------------|
| WiFi? | Yes! Free WiFi for all customers 📶 |
| Pet-friendly? | Yes! Dogs welcome on lead in outdoor area 🐕 |
| Gluten-free options? | Yes! We have GF bread & options — ask our staff 🌱 |
| Accept card? | Yes! Cash, card, Apple Pay, Google Pay 💳 |
| Open today? | We're open 6:30am–Midnight, 7 days! ☀️ |
| Parking? | FREE parking on-site! 🚗 |
| Kids welcome? | Yes! Kids menu available 👶 |
| Functions & events? | Yes! We cater for weddings, parties — call us! 🎉 |
| Vegetarian? | Yes! Plenty of veggie options 🌿 |
| Watersports? | Yes! Paddleboards & kayaks to rent 🛶 |

---

### 8. FALLBACK / HUMAN HANDOFF

**Trigger:** Bot doesn't understand user input

**Bot Message:**
```
I'm not 100% sure on that 😅

Let me grab one of our team!
```

**Buttons:**
- ☎️ [Call: 07 4125 5528](tel:0741255528)
- 📧 [Email: team@aquavue.com.au](mailto:team@aquavue.com.au)

---

### 9. LEAD CAPTURE FLOW
**Trigger:** After user asks a few questions

**Bot Message:**
```
💫 WANT 10% OFF YOUR NEXT COFFEE?

☕ Drop your number and we'll send you:
• Exclusive specials
• Happy hour deals
• Event invites

Be the first to know! 🙌

Your name:
```

**Collect:**
- Name
- Phone number / Email

**Bot Message:**
```
AWESOME! 🎉

You're on the list!

Your 10% code will arrive via SMS within 24 hours.

Thanks [NAME]! See you soon at Aqua Vue! 🐋☕🌊
```

---

### 10. TONE & STYLE GUIDE

| Element | How to Use |
|---------|------------|
| 😄 Emoji | Use naturally (☕🐋🌊) |
| 📱 Short sentences | Keep under 20 words |
| 🙌 Aussie tone | "No worries", "sorted", "legend" |
| 💬 Questions | End with "What do you reckon?" |
| ⭐ Upsell | "Want a pastry with that?" |
| 🙋 Human | Use "I", "let's", "I'll check" |

---

### 11. QUICK LINK REFERENCE

| Action | Link |
|--------|------|
| 🌐 Website | https://www.aquavue.com.au/ |
| 📅 Book a Table | https://www.aquavue.com.au/reservations |
| 📍 Google Maps | https://maps.google.com/?q=Aqua+Vue+Hervey+Bay |
| 📞 Call | 07 4125 5528 |
| 📧 Email | team@aquavue.com.au |
| 📘 Facebook | https://www.facebook.com/aquavuehb/ |
| 📸 Instagram | @aquavuehb |

---

### ✅ READY TO DEPLOY

This chatbot is customized for:
- ✅ Aqua Vue Beachfront Bar & Eatery
- ✅ All details pre-filled with clickable links
- ✅ Optimized for Instagram DM & Facebook Messenger
- ✅ Ready to capture leads & bookings

---

**Next Step:** Import into ManyChat, Botpress, or Chatfuel!

Want me to create the HTML version of this too? 🔴