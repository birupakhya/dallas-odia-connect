# Event Photo Gallery Setup Guide

## Overview
The photo gallery system is designed to be scalable and handle multiple events. Each event can have its own Google Drive folder and configuration.

## How It Works

### 1. Event Configuration
Events are configured in `src/lib/google-drive.ts` in the `EVENT_CONFIGS` object:

```typescript
export const EVENT_CONFIGS = {
  'ganesh-puja-2025': {
    folderId: '1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ',
    title: 'Ganesh Puja Celebration 2025',
    subtitle: 'Relive the divine moments from our celebration of Lord Ganesh',
    date: 'Saturday, August 30, 2025',
    time: '10:30 AM - 1:45 PM',
    location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
    eventPlan: {
      '10:30 AM': 'Puja',
      '12:30 PM': 'Lunch',
      '1:45 PM': 'Clean-up'
    }
  }
  // Add new events here
};
```

### 2. Adding a New Event

#### Step 1: Create Google Drive Folder
1. Create a new folder in Google Drive
2. Set sharing to "Anyone with the link can view"
3. Copy the folder ID from the URL

#### Step 2: Update Configuration
Add a new entry to `EVENT_CONFIGS`:

```typescript
'kumar-purnima-2025': {
  folderId: 'YOUR_NEW_FOLDER_ID_HERE',
  title: 'Kumar Purnima 2025',
  subtitle: 'Celebrate the divine love of Lord Krishna and Radha',
  date: 'Saturday, October 18, 2025',
  time: '6:00 PM - 10:00 PM',
  location: 'Community Center, 123 Main St, Dallas, TX 75201',
  eventPlan: {
    '6:00 PM': 'Welcome & Aarti',
    '7:00 PM': 'Cultural Program',
    '8:30 PM': 'Dinner',
    '10:00 PM': 'Closing'
  }
}
```

#### Step 3: Update Navigation
Add the new event to your navigation or event pages with links like:
- `/events/gallery?event=kumar-purnima-2025` (all content)
- `/events/gallery?event=kumar-purnima-2025&type=photos` (photos only)
- `/events/gallery?event=kumar-purnima-2025&type=videos` (videos only)

### 3. URL Structure

The gallery supports these URL patterns:
- `/events/gallery` - Default gallery (Ganesh Puja 2025)
- `/events/gallery?event=EVENT_ID` - Specific event
- `/events/gallery?type=photos` - Photos only
- `/events/gallery?type=videos` - Videos only
- `/events/gallery?event=EVENT_ID&type=photos` - Specific event, photos only

### 4. File Requirements

#### Images
- Supported formats: JPG, PNG, GIF, WebP
- Recommended size: 800px width for thumbnails
- Permissions: "Anyone with the link can view"

#### Videos
- Supported formats: MP4, MOV, AVI, WebM
- Permissions: "Anyone with the link can view"
- Thumbnails are automatically generated

### 5. Current Events

- **Ganesh Puja 2025** (`ganesh-puja-2025`)
  - Folder: [Google Drive](https://drive.google.com/drive/folders/1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ)
  - Photos: 200+
  - Videos: 4

### 6. Future Considerations

- **Event Categories**: Add category filtering (Religious, Cultural, Social)
- **Year Grouping**: Group events by year automatically
- **Search**: Add search functionality across all events
- **Featured Events**: Highlight important events on the main page

## Troubleshooting

### Images Not Loading
- Check Google Drive sharing permissions
- Ensure folder is set to "Anyone with the link can view"
- Verify API key is valid
- Check browser console for errors

### Videos Not Playing
- Ensure video files are in supported formats
- Check Google Drive video preview permissions
- Test direct link access

### Performance Issues
- Reduce image sizes for better loading
- Use WebP format for images when possible
- Consider implementing lazy loading for large galleries
