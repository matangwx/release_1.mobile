using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace iAuth
{
    public partial class TestOut : ContentPage
    {
        public TestOut()
        {
            InitializeComponent();
        }


        void Handle_Click (object sender, System.EventArgs e){
            DisplayAlert("Title", "fml","cancel");
        }
    }
}
