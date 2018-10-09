using System.Diagnostics;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;


namespace ArduinoSelector
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class ArduinoSelectorUx : UserControl
    {
        Selector arduinoSelector;
        public ArduinoSelectorUx()
        {
            this.InitializeComponent();
        }

        public void Show(Selector selector)
        {
            arduinoSelector = selector;

            DeviceListSource.Source = arduinoSelector.ListOfDevices;
        }

        private void OnDeviceSelected(object sender, RoutedEventArgs e)
        {
            var selection = ConnectDevices.SelectedItems;
            ArduinoDeviceListEntry entry = null;

            if (selection.Count > 0)
            {
                var obj = selection[0];
                entry = (ArduinoDeviceListEntry)obj;

                if (entry != null)
                {
                    Debug.WriteLine("Device selected: " + entry.InstanceId);
                }
            }
        }
    }
}
