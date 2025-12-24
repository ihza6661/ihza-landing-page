# 📸 Quick Image Optimization Reference

## 🚀 Fastest Way - Use the Script

```bash
./optimize-image.sh path/to/your-image.png
```

That's it! Follow the prompts.

---

## 📋 Common Commands

### **Optimize portfolio screenshot**
```bash
./optimize-image.sh screenshot.png 85
```

### **High quality (90%)**
```bash
./optimize-image.sh screenshot.png 90
```

### **From Downloads folder**
```bash
./optimize-image.sh ~/Downloads/project.png
```

---

## 📊 Target Sizes

| Type | Target | Quality |
|------|--------|---------|
| Portfolio Screenshot | < 100 KB | 85% |
| Logo/Icon | < 20 KB | 95% |
| Background | < 150 KB | 75% |
| Profile Photo | < 50 KB | 85% |

---

## ✅ Checklist for New Projects

- [ ] Capture hero section (1920px width)
- [ ] Run: `./optimize-image.sh screenshot.png`
- [ ] Verify < 100 KB
- [ ] Add to `src/data/portfolioData.js`
- [ ] Test in browser
- [ ] Commit

---

## 🌐 Online Tools (No Command Line)

**Squoosh** (Recommended)  
https://squoosh.app/

**TinyPNG**  
https://tinypng.com/

---

## 📚 Full Documentation

See [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md) for complete guide

---

## 💡 Pro Tips

1. Always use **85% quality** for portfolio screenshots
2. Target **< 100 KB** for optimal performance
3. Keep **original PNG** as backup
4. Use **descriptive filenames** (e.g., `laptop-store.webp`)
5. Test on **3G** connection to verify speed

---

## 🆘 Quick Help

**Script not working?**
```bash
chmod +x optimize-image.sh
```

**Image too large?**
```bash
./optimize-image.sh image.png 75
```

**Need better quality?**
```bash
./optimize-image.sh image.png 90
```

---

**Last Updated:** December 23, 2025
