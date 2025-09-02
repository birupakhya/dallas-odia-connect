# Extract Google Drive File IDs for DOS Website

## 🎯 **Goal: Get Individual Photo File IDs**

Your Google Drive folder contains many Ganesh Puja photos, but to display them on the website, I need the individual file ID for each photo.

## 📋 **Step-by-Step Process:**

### **Step 1: Access Your Google Drive Folder**
Go to: [https://drive.google.com/drive/folders/1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ?usp=sharing](https://drive.google.com/drive/folders/1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ?usp=sharing)

### **Step 2: Get Individual Photo Links**
For each photo you want to display:

1. **Right-click on the photo** (e.g., IMG_2181.jpg)
2. **Select "Share"**
3. **Click "Get link"**
4. **Ensure it shows "Anyone with the link can view"**
5. **Copy the link**

### **Step 3: Extract the File ID**
The link will look like this:
```
https://drive.google.com/file/d/1ABC123DEF456GHI789/view?usp=sharing
```

**The file ID is the part between `/d/` and `/view`:**
```
1ABC123DEF456GHI789
```

### **Step 4: Convert to Direct Image URL**
Replace `FILE_ID_HERE_X` in your EventGallery.tsx with the actual file ID:

**Before:**
```javascript
src: 'https://drive.google.com/uc?export=view&id=FILE_ID_HERE_1'
```

**After:**
```javascript
src: 'https://drive.google.com/uc?export=view&id=1ABC123DEF456GHI789'
```

## 🚀 **Quick Setup Example:**

Let's say you have these photos:
- IMG_2181.jpg → File ID: `1ABC123DEF456GHI789`
- IMG_2182.jpg → File ID: `2DEF456GHI789JKL012`
- IMG_2183.jpg → File ID: `3GHI789JKL012MNO345`

**Update your EventGallery.tsx like this:**

```javascript
{
  id: 'gp1',
  src: 'https://drive.google.com/uc?export=view&id=1ABC123DEF456GHI789',
  alt: 'Ganesh Puja 2025 - Traditional Rituals',
  // ... rest of the data
},
{
  id: 'gp2',
  src: 'https://drive.google.com/uc?export=view&id=2DEF456GHI789JKL012',
  alt: 'Ganesh Puja 2025 - Community Gathering',
  // ... rest of the data
},
{
  id: 'gp3',
  src: 'https://drive.google.com/uc?export=view&id=3GHI789JKL012MNO345',
  alt: 'Ganesh Puja 2025 - Cultural Performances',
  // ... rest of the data
}
```

## 📱 **What You'll Get:**

Once you replace the file IDs:
- ✅ **Beautiful photo gallery** with your real Ganesh Puja photos
- ✅ **Responsive design** that works on all devices
- ✅ **Photo lightbox** with zoom, navigation, and download options
- ✅ **Organized by category** (Ganesh Puja 2025)
- ✅ **Professional presentation** for your community

## 🔧 **Need Help?**

If you want me to help you set this up:
1. **Get 3-5 photo file IDs** using the steps above
2. **Share them with me** (just the file IDs, not the full links)
3. **I'll update your EventGallery.tsx** with working photo URLs

## ⚡ **Pro Tip:**

Start with just 3-5 photos to test, then add more once you confirm everything is working perfectly!
