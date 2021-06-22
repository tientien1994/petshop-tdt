'use strict';

module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.toanbosoluong = oldCart.toanbosoluong || 0;
    this.toanbogia = oldCart.toanbogia || 0;
    this.diachi = oldCart.diachi || {};
    this.phuongthucgiaohang = oldCart.phuongthucgiaohang || "COD";
    this.toanbogiaformat=oldCart.toanbogiaformat||"0";

    this.format=(n)=> {
        return (Math.round(parseInt(n)/1000)*1000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      }
    this.gettoanbosoluong = () => {
        var toanbosoluong = 0;
        for (var id in this.items) {
            toanbosoluong += parseInt(this.items[id].soluong);
        }
        return toanbosoluong;
    };

    this.gettoanbogia = () => {
        var toanbogia = 0;
        for (var id in this.items) {
            toanbogia += parseFloat(this.items[id].tonggia);
        }
        toanbogia = parseFloat(toanbogia).toFixed(2);
        return toanbogia;
    };
    this.gettoanbogiaformat = () => {
        var toanbogia = 0;
        for (var id in this.items) {
            toanbogia += parseFloat(this.items[id].tonggia);
        }
        toanbogia = parseFloat(toanbogia).toFixed(2);
        return this.format(toanbogia).toString();
    };

    this.add = (item, id, soluong) => {
        var storedItem = this.items[id];
        if (!storedItem) {
            this.items[id] = { item: item, soluong: 0, tonggia: 0, tonggiaformat:""};
            storedItem = this.items[id];
        }
        storedItem.item.gia = parseFloat(storedItem.item.gia);
        storedItem.soluong += parseInt(soluong);
        storedItem.tonggia = parseFloat(storedItem.item.gia * storedItem.soluong);
        this.toanbosoluong = this.gettoanbosoluong();
        this.toanbogia = this.gettoanbogia();
        this.toanbogiaformat=this.gettoanbogiaformat()
        storedItem.tonggiaformat=this.format(storedItem.item.gia * storedItem.soluong)
        return this.getCartItem(id);
    };

    this.remove = (id) => {
        var storedItem = this.items[id];
        if (storedItem) {
            delete this.items[id];
            this.toanbosoluong = this.gettoanbosoluong();
            this.toanbogia = this.gettoanbogia();
            storedItem.tonggiaformat=this.format(storedItem.tonggia)
            this.toanbogiaformat=this.gettoanbogiaformat()
        }
    };

    this.update = (id, soluong) => {
        var storedItem = this.items[id];
        if (storedItem && soluong >= 1) {
            storedItem.soluong = soluong;
            storedItem.tonggia = parseFloat(storedItem.item.gia * storedItem.soluong);
            storedItem.tonggiaformat=this.format(storedItem.tonggia)
            this.toanbosoluong = this.gettoanbosoluong();
            this.toanbogia = this.gettoanbogia()
            this.toanbogiaformat=this.gettoanbogiaformat()
        }
        return this.getCartItem(id);
    };

    this.empty = () => {
        this.items = {};
        this.toanbosoluong = 0;
        this.toanbogia = 0;
        this.toanbogiaformat="0"
    };

    this.generateArray = () => {
        var arr = [];
        for (var id in this.items) {
            //this.items[id].item.gia = parseFloat(this.items[id].item.gia).toFixed(2);
            this.items[id].tonggia = parseFloat(this.items[id].tonggia).toFixed(2);
            arr.push(this.items[id]);
        }
        return arr;
    };

    this.getCart = function() {
        var cart = {
            items: this.generateArray(),
            toanbosoluong: this.toanbosoluong,
            toanbogia: this.toanbogia,
            diachi: this.diachi,
            phuongthucgiaohang: this.phuongthucgiaohang,
            toanbogiaformat: this.toanbogiaformat,
        };
        return cart;
    }

    this.getCartItem = function(id) {
        var cartItem = {
            item: this.items[id],
            toanbosoluong: this.toanbosoluong,
            toanbogia: this.toanbogia,
            toanbogiaformat: this.toanbogiaformat,
        }
        return cartItem;
    }
};