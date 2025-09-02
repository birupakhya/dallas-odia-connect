# Get Real Google Drive Photo IDs for Your Ganesh Puja Gallery

## 🎯 **Goal: Replace Placeholder Images with Your Real Photos**

Right now you're seeing placeholder images. To see your actual Ganesh Puja photos, you need to get the real file IDs from your Google Drive folder.

## 📋 **Step-by-Step Process:**

### **Step 1: Access Your Google Drive Folder**
Go to: [https://drive.google.com/drive/folders/1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ?usp=sharing](https://drive.google.com/drive/folders/1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ?usp=sharing)

### **Step 2: Get Individual Photo Links**
For each photo you want to display (start with 3-5 to test):

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
Replace the placeholder URLs in `src/lib/google-drive.ts`:

**Before:**
```typescript
thumbnailLink: 'https://picsum.photos/400/400?random=1',
```

**After:**
```typescript
thumbnailLink: 'https://drive.google.com/uc?export=view&id=1ABC123DEF456GHI789',
```

## 🚀 **Quick Example:**

Let's say you have these photos:
- **IMG_2181.jpg** → File ID: `1ABC123DEF456GHI789`
- **IMG_2182.jpg** → File ID: `2DEF456GHI789JKL012`
- **IMG_2183.jpg** → File ID: `3GHI789JKL012MNO345`

**Update your `src/lib/google-drive.ts` like this:**

```typescript
{
  id: 'ganesh-puja-1',
  name: 'IMG_2181.jpg',
  webViewLink: 'https://drive.google.com/file/d/1ABC123DEF456GHI789/view',
  thumbnailLink: 'https://drive.google.com/uc?export=view&id=1ABC123DEF456GHI789', // REAL PHOTO
  // ... rest of the data
},
{
  id: 'ganesh-puja-2',
  name: 'IMG_2182.jpg',
  webViewLink: 'https://drive.google.com/file/d/2DEF456GHI789JKL012/view',
  thumbnailLink: 'https://drive.google.com/uc?export=view&id=2DEF456GHI789JKL012', // REAL PHOTO
  // ... rest of the data
},
{
  id: 'ganesh-puja-3',
  name: 'IMG_2183.jpg',
  webViewLink: 'https://drive.google.com/file/d/3GHI789JKL012MNO345/view',
  thumbnailLink: 'https://drive.google.com/uc?export=view&id=3GHI789JKL012MNO345', // REAL PHOTO
  // ... rest of the data
}
```

## 🔧 **What You Need to Do:**

1. **Get 3-5 photo file IDs** using the steps above
2. **Update the `thumbnailLink`** in `src/lib/google-drive.ts`
3. **Save the file** and refresh your test page
4. **See your real photos** in the gallery!

## 📱 **Expected Result:**

After updating the file IDs:
- ✅ **Real Ganesh Puja photos** will display instead of placeholders
- ✅ **All gallery functionality** will work with your photos
- ✅ **Professional presentation** of your actual event photos
- ✅ **Seamless user experience** on your DOS website

## ⚡ **Pro Tips:**

- **Start with just 3-5 photos** to test the setup
- **Make sure photos are publicly accessible** in Google Drive
- **Test each photo** to ensure it loads properly
- **Add more photos** once you confirm everything works

## 🎯 **Ready to Try?**

1. **Get 3 photo file IDs** from your Google Drive
2. **Update the `thumbnailLink` URLs** in the code
3. **Save and test** - you should see your real photos!

Your gallery is already working perfectly - you just need to connect it to your real photos!
