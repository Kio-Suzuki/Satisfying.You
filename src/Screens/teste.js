const DrawerWithLogoutButton = (props) => (
    <ScrollView contentContainerStyle={{flex: 1,  flexDirection: 'column', justifyContent: 'space-between' }}>
      
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
      
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image source={require('./img/logout.png')} style={styles.icon}></Image>
          </View>
          <Text style={styles.label}>Logout</Text>
        </View>
      </TouchableOpacity>
      
    </ScrollView>
  );
  
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
    },
    iconContainer: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
    }
  });