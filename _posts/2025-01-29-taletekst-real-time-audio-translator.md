---
layout: post
title: TaleTekst | Real-time Audio Translator
categories:
- projects
---

**TaleTekst** is a Firefox extension that provides real-time audio translation for any language. Born from a personal need to learn Danish through YouTube videos, this extension captures audio from web pages and translates speech in real-time using AI/LLM services.

## The Story Behind TaleTekst

As someone who learns better through speech and audio, I found myself struggling to find a free, easy solution to translate Danish YouTube videos in real-time while learning the language. This personal challenge became the inspiration for TaleTekst - a practical tool that could help not just me, but anyone facing similar language barriers.

The idea was simple: create a Firefox extension that could capture audio from any webpage and provide instant translation to English. What started as a personal project to support my Danish learning journey has evolved into a universal solution that works with any language, making foreign content accessible to everyone.

## Project Overview

TaleTekst breaks down language barriers by providing instant translation of spoken content directly on your screen. Whether you're learning a new language, watching international content, or need accessibility support, this extension makes foreign audio content immediately understandable.

### Key Features

#### Real-time Audio Translation
- **Instant Processing**: Captures audio from web pages and translates speech in real-time
- **Universal Language Support**: Works with any language using advanced AI/LLM services
- **Smart Speech Detection**: Intelligent pause detection ensures complete sentence translation
- **High Performance**: Optimized processing with intelligent caching to reduce API calls

#### User Experience
- **Minimalistic Interface**: Clean, one-click start/stop functionality
- **Draggable Captions**: Resizable caption overlay that can be positioned anywhere on screen
- **Theme-Aware Design**: Automatically adapts to browser theme preferences
- **Privacy-Focused**: Secure API communication with no permanent data storage

### Technical Implementation

#### Browser Extension Development
- **Firefox WebExtensions API**: Built using modern browser extension standards
- **Audio Capture**: Direct webpage audio capture using `HTMLMediaElement.captureStream()`
- **Content Scripts**: Seamless integration with web pages for audio processing
- **Background Processing**: Efficient handling of translation requests

#### AI/LLM Integration
- **Translation Services**: Integration with AI/LLM services for accurate translation
- **Secure Proxy**: Cloudflare Workers proxy for secure API key handling
- **Intelligent Caching**: Reduces API calls through smart translation caching
- **Error Handling**: Robust error handling and fallback mechanisms

#### Performance Optimization
- **Throttled Processing**: Prevents API rate limiting through intelligent request throttling
- **Local Storage**: Efficient local caching of translations and settings
- **Memory Management**: Optimized memory usage for smooth performance
- **Cross-Platform**: Works across different websites and content types

### Use Cases

- **Language Learning**: Perfect for understanding foreign YouTube videos and educational content
- **Accessibility**: Provides real-time captions for hearing-impaired users
- **International Communication**: Breaks down language barriers in video calls and meetings
- **Entertainment**: Enjoy foreign movies, shows, and podcasts with instant translation
- **Professional Development**: Access international content for learning and development

### Project Status

**Completed**: Production-ready Firefox extension  
**Submitted**: Firefox Add-ons store submission  
**Open Source**: Available on GitHub  
**Documentation**: Comprehensive documentation and privacy policy  
**Ongoing**: Continuous development and UI improvements

### Project Repositories

- **GitHub Repository**: View the complete source code and documentation at [TaleTekst on GitHub](https://github.com/AfshinMoatari/TaleTekst)
- **Firefox Add-ons Store**: Download the extension from [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/taletekst-real-time-audio-translator/)

### Screenshots

Here are some images showcasing the TaleTekst extension interface and functionality:

<div class="carousel-container" id="carousel2">
  <a class="carousel-button left" onclick="moveCarousel('carousel2', -1)">
    <i class="fa fa-solid fa-chevron-left fa-2x"></i>
  </a>
  <div class="image-carousel">
    <div class="image-gallery">
      <div class="image-row" id="imageRow2">
        <a href="/assets/images/2025/01/29/1.png" target="_blank">
          <img src="/assets/images/2025/01/29/1.png" alt="TaleTekst Main Interface" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/29/2.png" target="_blank">
          <img src="/assets/images/2025/01/29/2.png" alt="Caption Overlay on YouTube" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/29/3.png" target="_blank">
          <img src="/assets/images/2025/01/29/3.png" alt="Translation in Action" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/29/4.png" target="_blank">
          <img src="/assets/images/2025/01/29/4.png" alt="Extension Popup" class="thumbnail">
        </a>
      </div>
    </div>
  </div>
  <a class="carousel-button right" onclick="moveCarousel('carousel2', 1)">
    <i class="fa fa-solid fa-chevron-right fa-2x"></i>
  </a>
</div>

## Future Development

This project represents an ongoing commitment to making language learning and international content more accessible. I continue to develop and improve TaleTekst with better performance, enhanced UI, and additional features as time permits. The goal is to maintain and evolve this tool to serve the community that shares the same need for real-time language translation.

What started as a personal solution for learning Danish has become a universal tool that supports any language, making foreign content accessible to users worldwide. TaleTekst demonstrates how personal challenges can lead to solutions that benefit the broader community.

Feel free to reach out if you have any questions or need further information about the TaleTekst extension!
